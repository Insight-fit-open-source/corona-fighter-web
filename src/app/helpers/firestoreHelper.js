import * as randomatic from 'randomatic';
import FirebaseFactory from 'src/app/lib/firebase';

export default class FirestoreHelper {
  static async GetOrganisationInvitations(organisationId) {
    const { firestore } = await FirebaseFactory.get();
    const collection = await firestore
      .collection('invitations')
      .where('organisationId', '==', organisationId)
      .get();
    const invitations = collection.docs.map(x => {
      return {
        dateSent: x.get('dateSent'),
        invitationAccepted: x.get('invitationAccepted'),
        invitationCode: x.get('invitationCode'),
        organisationId: x.get('organisationId'),
        userEmailAddress: x.get('userEmailAddress'),
        userId: x.get('userId'),
      };
    });
    return invitations;
  }

  static async RemoveOrganisationInvitation(organisationId, invitationCode) {
    const { firestore } = await FirebaseFactory.get();
    const collection = await firestore
      .collection('invitations')
      .where('organisationId', '==', organisationId)
      .where('invitationCode', '==', invitationCode)
      .get();

    const batch = firestore.batch();
    collection.docs.forEach(doc => {
      batch.delete(doc.ref);
    });

    await batch.commit();
  }

  static async AddOrganisationInvitation(organisationId, userName, email) {
    const { firestore } = await FirebaseFactory.get();

    const code = randomatic('A0', 8);

    const addDoc = await firestore.collection('invitations').add({
      dateSent: Date.now(),
      invitationAccepted: false,
      invitationCode: code,
      organisationId,
      userEmailAddress: email,
      userId: '',
      userName,
    });
  }

  static async GetUserInvitations(userId) {
    const { firestore } = await FirebaseFactory.get();
    const invitations = await firestore
      .collection('invitations')
      .where('userId', '==', userId)
      .get();

    if (invitations.docs && invitations.docs.length > 0) {
      const organisations = await firestore.collection('profiles').get();

      const userInvitations = invitations.docs.map(x => {
        const organisationDocs = organisations.docs.filter(
          y => y.id == x.get('organisationId'),
        );
        const organisation = organisationDocs[0].get('organisation');
        return {
          dateSent: x.get('dateSent'),
          invitationAccepted: x.get('invitationAccepted'),
          invitationCode: x.get('invitationCode'),
          organisationId: x.get('organisationId'),
          userEmailAddress: x.get('userEmailAddress'),
          userId: x.get('userId'),
          organisationEmailAddress: organisation.email,
          organisationName: organisation.name,
        };
      });
      return userInvitations;
    }
    return [];
  }

  static async AcceptOrganisationInvitation(userId, code) {
    const { firestore } = await FirebaseFactory.get();
    const collection = await firestore
      .collection('invitations')
      .where('invitationCode', '==', code)
      .where('userId', '==', '')
      .get();

    if (collection.docs && collection.docs.length > 0) {
      const docId = collection.docs[0];

      firestore
        .collection('invitations')
        .doc(docId.id)
        .set(
          {
            invitationAccepted: true,
            userId,
          },
          { merge: true },
        );
    }
  }

  static async HasOrganisation(userId) {
    const { firestore } = await FirebaseFactory.get();
    const doc = await firestore
      .collection(`profiles`)
      .doc('userId')
      .get();

    const orgName = doc.get('organisationName');
    if (orgName && orgName.length > 0) {
      return true;
    }
    return false;
  }
}

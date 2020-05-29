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

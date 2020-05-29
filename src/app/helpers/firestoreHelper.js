import * as randomatic from 'randomatic';
import { default as EmailHelper } from 'src/app/helpers/emailHelper';
import FirebaseFactory from 'src/app/lib/firebase';

export default class FirestoreHelper {
  static async GetOrganisationInvitations(organisationId) {
    try {
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
    } catch (error) {
      console.log(error);
    }
  }

  static async RemoveOrganisationInvitation(organisationId, invitationCode) {
    try {
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
    } catch (error) {
      console.log(error);
    }
  }

  static async AddOrganisationInvitation(organisationId, userName, email) {
    try {
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

      const organisation = await firestore.collection('profiles');

      await EmailHelper.sendInvitation(email, userName, code);
      await EmailHelper.test(
        ['jacques@86degrees.com'],
        'TEST MESSAGE',
        'THIS IS A TEST',
      );
    } catch (error) {
      console.log(error);
    }
  }
}

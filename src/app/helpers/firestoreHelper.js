import FirebaseFactory from 'src/app/lib/firebase';

export default class FirestoreHelper {
  static async GetOrganisationInvitations(userId) {
    const { firestore } = await FirebaseFactory.get();
    const collection = await firestore
      .collection('invitations')
      .where('organisationId', '==', userId)
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
}

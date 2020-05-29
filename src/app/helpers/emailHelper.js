// import * as PubSub from '@google-cloud/pubsub';
import FirebaseFactory from 'src/app/lib/firebase';
import FirestoreHelper from './firestoreHelper';

export default class EmailHelper {
  static async test(to, subject, body) {
    try {
      const { functions } = await FirebaseFactory.get();
      const sendEmail = functions.httpsCallable('system-emailTrigger');
      const result = await sendEmail({ to, subject, body });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  static async sendInvitation(userEmail, userName, code, orgName) {
    try {
      const { functions } = await FirebaseFactory.get();
      const sendEmail = functions.httpsCallable('system-emailTrigger');
      const body = `Hi ${userName}

You have been invited to join ${orgName} on CoronaFighter. Join them to do a daily COVID-19 survey.

Your invitation code is ${code}.
Go to https://app.testforcovid.co.za/ and enter your invitation code to join.

Kind regards
Your CoronaFighter team`;
      const result = await sendEmail({
        to: userEmail,
        subject: 'CoronaFighter invitation',
        body,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async sendSurveyResult(userId, title, resultBody, testStatus) {
    console.log('SENDING');
    try {
      const userInvites = await FirestoreHelper.GetUserInvitations(userId);
      const { functions, firestore } = await FirebaseFactory.get();
      const sendEmail = functions.httpsCallable('system-emailTrigger');
      userInvites.forEach(async invite => {
        const doc = await firestore
          .collection(`profiles`)
          .doc(invite.organisationId)
          .get();
        const orgEmail = doc.get('organisation').email;
        try {
          const body = `${invite.userName} has just completed their symptom survey.
Here are their results:

${title}\r\n
${resultBody}\r\n
${testStatus}\r\n

Kind regards
Your CoronaFighter team`;
          const result = await sendEmail({
            to: orgEmail,
            subject: 'CoronaFighter Survey Submission',
            body,
          });
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}

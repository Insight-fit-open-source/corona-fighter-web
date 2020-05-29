import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import admin from 'firebase';
import moment from 'moment';
import { default as React } from 'react';
import FirebaseFactory from 'src/app/lib/firebase';
import { Item, Wrapper } from './styles';

export class OrganisationHistory extends React.Component {
  constructor(props) {
    console.log('PROPS :', props);
    super(props);
    this.state = { ...props, surveys: [] };
  }

  async getData() {
    console.log('ORG PROPS', this.props);
    try {
      const { rsf, firestore } = await FirebaseFactory.get();
      const invitations = await firestore
        .collection('invitations')
        .where('organisationId', '==', this.props.userId)
        .where('invitationAccepted', '==', true)
        .get();

      console.log('SNASPHOT:', invitations.docs);

      const users = invitations.docs.map(x => {
        return {
          id: x.get('userId'),
          email: x.get('userEmailAddress'),
          name: 'NAME',
        };
      });

      const results = await firestore
        .collection(`surveyResponses`)
        .where(
          admin.firestore.FieldPath.documentId(),
          'in',
          users.map(x => x.id),
        )
        .get();

      const surveys = results.docs.map(doc => {
        const docData = doc.data();
        const user = users.filter(x => x.id == doc.id)[0];
        console.log('USER:', user);

        return Object.keys(docData).map((key, index) => {
          return {
            submissionTime: key,
            outcome: docData[key].outcome,
            name: user.name,
            email: user.email,
          };
        });
      });

      const merged = [].concat.apply([], surveys);
      console.log('HISTORY:', merged);
      this.setState({ surveys: merged.filter(x => !!x.outcome) });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Wrapper>
        {this.state.surveys && this.state.surveys.length
          ? this.state.surveys.map(survey => (
              <Item
                key={survey.submissionTime}
                severity={survey.outcome.severity}>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={survey.outcome.severity}>
                    <Typography variant='body1'>
                      <div>
                        {survey.name} - {survey.email}
                      </div>
                      <div>{survey.outcome.title}</div>
                      <small>
                        {moment.unix(survey.submissionTime / 1000).fromNow()}
                      </small>
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div className='panel-inner'>
                      <Typography variant='body1'>
                        <strong>Should I get tested?</strong>
                        <br />
                        {survey.outcome.testStatus}
                      </Typography>
                      <Typography variant='body1'>
                        <strong>General Guidance:</strong>
                        <br />
                        {survey.outcome.body}
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Item>
            ))
          : null}
      </Wrapper>
    );
  }
}
export default OrganisationHistory;

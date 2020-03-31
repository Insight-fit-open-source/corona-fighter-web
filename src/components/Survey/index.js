import React from 'react';
import { connect } from 'react-redux';

import calculateOutcome from 'src/components/Survey/config/calculateOutcome';
import { actions } from 'src/store/definitions/survey';
import { actions as profileActions } from 'src/store/definitions/profile';
import steps from 'src/components/Survey/config';
import {
  ChoiceBoxInner,
  Options,
  BackdropContent,
  OutcomeContent,
} from 'src/components/Survey/fragments';

import {
  LayoutBlock,
  Backdrop,
  ChoiceBoxWrap,
  Outcomes,
  ChoiceBox,
} from 'src/components/Survey/styles';

export class Survey extends React.PureComponent {
  componentDidMount() {
    return this.props.startSurvey();
  }

  componentWillUnmount() {
    this.props.stopSurvey();
  }

  handleOutcome = outcomeActive => {
    const { checkin } = this.props;
    const { step, selection } = this.props;

    let outcome = {};
    if (outcomeActive) {
      checkin();
      outcome = calculateOutcome(selection, steps[step].options);
    }

    return outcome;
  };

  render() {
    const { step } = this.props;

    const outcomeActive = Boolean(
      steps[step] && steps[step].layout === 'outcome',
    );

    return (
      <LayoutBlock>
        <Backdrop
          layoutActive={steps[step] && steps[step].layout !== 'question'}>
          <BackdropContent
            active={steps[step] && steps[step].layout === 'backdrop'}
            stepContent={steps[step]}
          />
        </Backdrop>
        <ChoiceBoxWrap
          layoutActive={steps[step] && steps[step].layout === 'question'}>
          <ChoiceBox>
            <ChoiceBoxInner
              step={step}
              title={steps[step] ? steps[step].title : ''}
              nextLink={steps[step] ? steps[step].next : ''}>
              {steps[step] ? (
                <Options items={steps[step].options} step={step} />
              ) : null}
            </ChoiceBoxInner>
          </ChoiceBox>
        </ChoiceBoxWrap>
        <Outcomes layoutActive={outcomeActive}>
          <OutcomeContent
            active={outcomeActive}
            outcome={this.handleOutcome(outcomeActive)}
          />
        </Outcomes>
      </LayoutBlock>
    );
  }
}

const mapState = state => ({
  selection: state.survey.selected || {},
});

const mapDispatch = dispatch => ({
  startSurvey: () => dispatch(actions.surveyStarted()),
  stopSurvey: () => dispatch(actions.surveyCompleted()),
  checkin: () => dispatch(profileActions.checkin()),
});

export default connect(mapState, mapDispatch)(Survey);

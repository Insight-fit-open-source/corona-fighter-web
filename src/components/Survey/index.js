import React from 'react';
import { connect } from 'react-redux';

import { actions } from 'src/store/definitions/survey';
import steps from 'src/components/Survey/config';
import {
  StepLink,
  ChoiceBoxInner,
  Options,
  BackdropContent,
} from 'src/components/Survey/fragments';

import {
  LayoutBlock,
  Backdrop,
  ChoiceBoxWrap,
  StepsWrap,
  ChoiceBox,
} from 'src/components/Survey/styles';

export class Survey extends React.PureComponent {
  componentDidMount() {
    return this.props.startSurvey();
  }

  componentWillUnmount() {
    this.props.stopSurvey();
  }
  render() {
    const { step, userId } = this.props;
    return (
      <LayoutBlock>
        <Backdrop layoutActive={steps[step].layout === 'backdrop'}>
          <BackdropContent
            active={steps[step].layout === 'backdrop'}
            stepContent={steps[step]}
          />
        </Backdrop>
        <ChoiceBoxWrap layoutActive={steps[step].layout === 'question'}>
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
          <StepsWrap>
            {Object.keys(steps).map(
              (key, index) =>
                steps[key].layout === 'question' && (
                  <StepLink
                    key={key}
                    link={key}
                    text={steps[key].linkText}
                    number={index}
                    currentStep={step}
                    selectionComplete={false}
                  />
                ),
            )}
          </StepsWrap>
        </ChoiceBoxWrap>
      </LayoutBlock>
    );
  }
}

const mapDispatch = dispatch => ({
  startSurvey: () => dispatch(actions.surveyStarted()),
  stopSurvey: () => dispatch(actions.surveyCompleted()),
});

export default connect(null, mapDispatch)(Survey);

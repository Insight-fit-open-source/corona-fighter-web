import React from 'react';

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

export default ({ step, userId }) => {
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
};

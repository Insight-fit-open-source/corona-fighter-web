import React from 'react';
import _ from 'lodash';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { actions } from 'src/store/definitions/survey';
import { ChoiceOption, ChoiceOptionsWrap } from 'src/components/Survey/styles';

export const Options = ({
  items,
  step,
  isSelected,
  selectOption,
  getSelection,
}) => {
  // eslint-disable-next-line no-underscore-dangle
  const { exclusive } = items._config;

  const makeSelection = itemKey => {
    const selected = getSelection(step);
    const payload = { step };

    if (exclusive) {
      payload[step] = [itemKey];
    } else if (_.includes(selected, itemKey)) {
      payload[step] = selected.filter(x => x !== itemKey);
    } else {
      payload[step] = selected.concat([itemKey]);
    }

    return selectOption(payload);
  };

  return (
    <ChoiceOptionsWrap step={step}>
      {items &&
        _.values(
          Object.keys(items)
            .filter(key => key !== '_config')
            .reduce((res, key) => ((res[key] = items[key]), res), {}),
        ).map(item => (
          <ChoiceOption
            key={item.key}
            onClick={() => makeSelection(item.key)}
            selected={isSelected(item.key, step)}>
            {item.icon ? item.icon : null}
            <Typography
              variant='h5'
              style={{ textAlign: 'center', fontWeight: 300 }}>
              {item.title}
            </Typography>
            {item.desc ? (
              <div className='reveal-description'>
                <p>{item.desc}</p>
              </div>
            ) : null}
          </ChoiceOption>
        ))}
    </ChoiceOptionsWrap>
  );
};

const mapState = state => ({
  isSelected: (key, step) =>
    Boolean(
      _.isArray(state.survey.selected[step]) &&
        _.includes(state.survey.selected[step], key),
    ),
  getSelection: step => state.survey.selected[step] || [],
});

const mapDispatch = dispatch => ({
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  selectOption: option => dispatch(actions.surveySelectionSet(option)),
});

export default connect(mapState, mapDispatch)(Options);

import React from 'react';
import { actions } from 'src/store/definitions/themeOptions';
import _ from 'lodash';
import { connect } from 'react-redux';

class FormWrapper extends React.Component {
  state = {
    values: this.props.selectOptions(this.props.keys),
    errors: {},
  };

  save = _.debounce(() => {
    const { validationSchema } = this.props;
    const { values } = this.state;

    validationSchema
      .validate(values)
      .then(async () => {
        const { themeOptionsUpdateRequested, keys, userId } = this.props;
        const { section = 'theme', path } = keys;
        this.setState({ errors: {} });
        themeOptionsUpdateRequested({
          userId,
          values,
          path: `${section}.${path}`,
        });
      })
      .catch(err => {
        this.setState(state => ({
          errors: {
            ...state.errors,
            [err.path]: err.message,
          },
        }));
        const { errors } = this.state;
        console.log('errors:', errors);
      });
  }, 1000);

  shouldComponentUpdate(nextProps, nextState) {
    if (
      !_.isEqual(
        this.props.selectOptions(this.props.keys),
        nextProps.selectOptions(this.props.keys),
      )
    ) {
      this.setState({
        values: nextProps.selectOptions(this.props.keys),
      });
    }

    return (
      !_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState)
    );
  }

  handleChange = e => {
    const { name } = e.target;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState(state => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
    this.save();
  };

  render() {
    const { errors, values } = this.state;
    /**
     * We need to allow the props of the child of form wrapper to filter through, below
     * we are just removing the formWrapper related props before we pass the otherProps
     * down to the child.
     */
    const {
      Fields,
      selectOptions,
      keys,
      validationSchema,
      userId,
      themeOptionsUpdateRequested,
      ...otherProps
    } = this.props;

    return (
      <form data-test='form-wrapper' onSubmit={event => event.preventDefault()}>
        <Fields
          values={values}
          errors={errors}
          handleChange={this.handleChange}
          {...otherProps}
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { preflight } = state.themeOptions;
  return {
    userId: (state.auth.user && state.auth.user.uid) || '',
    selectOptions: ({ section, path, fields }) => {
      const sectionSubPath = section || 'theme';
      const pathObject = _.get(preflight, `${sectionSubPath}.${path}`, {});

      if (fields && fields.length > 0) {
        return _.pickBy(pathObject, (value, key) => fields.includes(key));
      }

      return pathObject;
    },
  };
};

const mapDispatchToProps = dispatch => {
  return {
    themeOptionsUpdateRequested: payload =>
      dispatch(actions.themeOptionsUpdateRequested(payload)),
  };
};

export const FormWrapperWithThemeOptions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormWrapper);

const withFormWrapper = ({ Fields, validationSchema, keys }) => props => (
  <FormWrapperWithThemeOptions
    validationSchema={validationSchema}
    Fields={Fields}
    keys={keys}
    {...props}
  />
);

export default withFormWrapper;

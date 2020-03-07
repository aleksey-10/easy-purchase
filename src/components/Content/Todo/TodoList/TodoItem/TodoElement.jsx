import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

const editElement = props => <form onSubmit={props.handleSubmit}>
    <Field
        onBlur={props.submit}
        component={"input"}
        name={props.name}
        type={props.type}
        className="w-100 h-100"
        autoFocus
    />
</form>

const mapStateToProps = (state, ownProps) => ({
    initialValues: {[ownProps.name]: ownProps.val }
})

export default compose(
    connect(mapStateToProps),
    reduxForm({ form: 'itemElement', enableReinitialize: true })
)(editElement)

import css from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name has to be at least 3 characters long!')
    .max(50, 'Name has to be maximum 50 characters long!')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number has to be at least 3 characters long!')
    .max(50, 'Number has to be maximum 50 characters long!')
    .required('Number is required'),
});

const ContactForm = ({ handleAdd }) => {
  const fieldId = useId();

  const handleSubmit = (values, formikHelpers) => {
    handleAdd(values.name, values.number);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {values => {
        return (
          <Form className={css['form']}>
            <fieldset>
              <label htmlFor={`${fieldId}-name`} className={css['label']}>
                Name
              </label>
              <Field
                type="text"
                name="name"
                id={`${fieldId}-name`}
                className={css['input']}
              />
              <ErrorMessage name="username" component="span" />

              <label htmlFor={`${fieldId}-number`} className={css['label']}>
                Number
              </label>
              <Field
                type="text"
                name="number"
                id={`${fieldId}-number`}
                className={css['input']}
              />
              <ErrorMessage
                name="number"
                component="span"
                className={css['error']}
              />
              <button type="submit" className={css['submit-button']}>
                {values.isSubmitting ? 'Adding your contact' : 'Add contact'}
              </button>
            </fieldset>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  ErrorMessage,
  Form,
  FormLabel,
  Field,
  FormButton,
} from './Form.styled';

export const ContactForm = () => {
  const contactsArray = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
    number: Yup.number().required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
  });
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        const { name, number } = values;
        dispatch(addContact(name, number));
        const find = contactsArray.find(contact => contact.name === name);
        if (!find) {
          actions.resetForm();
        }
      }}
      validationSchema={SignupSchema}
    >
      <Form>
        <FormLabel>
          Name
          <Field
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <ErrorMessage name="name" component="span" />
        </FormLabel>
        <FormLabel>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
          />
          <ErrorMessage name="number" component="span" />
        </FormLabel>
        <FormButton type="submit">Add contacts</FormButton>
      </Form>
    </Formik>
  );
};

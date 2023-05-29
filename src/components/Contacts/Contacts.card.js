import { ListItem, Delete } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactSlice';

export const ContactsCard = ({ filterContacts }) => {
  const dispatch = useDispatch();
  return filterContacts.map(({ name, id, number }) => {
    return (
      <ListItem key={id}>
        <p>{name}:</p>
        <p>{number}</p>
        <Delete type="button" onClick={() => dispatch(deleteContacts())}>
          Delete
        </Delete>
      </ListItem>
    );
  });
};

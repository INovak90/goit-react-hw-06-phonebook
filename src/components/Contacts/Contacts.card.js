import { ListItem, Delete } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactSlice';
import { useSelector } from 'react-redux';

export const ContactsCard = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();
  return visibleContacts.map(({ name, id, number }) => {
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

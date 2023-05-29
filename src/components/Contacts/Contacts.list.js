import { ListContacts } from './Contacts.styled';
import { ContactsCard } from './Contacts.card';

export const ContactsList = ({ filterContacts }) => (
  <ListContacts>
    <ContactsCard filterContacts={filterContacts} />
  </ListContacts>
);

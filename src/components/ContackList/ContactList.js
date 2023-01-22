import Button from 'components/Button/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

// import { ButtonList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li
          key={id}
          style={{
            display: 'grid',
            gridTemplateColumns: '100px 100px',
            justifyContent: 'space-between',
            width: '300px',
            alignItems: 'center',
          }}
        >
          <p>
            {name}:{number}
          </p>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

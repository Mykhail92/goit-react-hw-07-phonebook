import Button from 'components/Button/button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

// import { ButtonList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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

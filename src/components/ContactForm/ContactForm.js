import { nanoid } from 'nanoid';
import Button from 'components/Button/button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import { Form, Label } from './ContavtForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);

  const handleChange = e => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChekUnique = name => {
    const isExistContact = !!contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    isExistContact && alert(name + ' is already in contacts');
    return !isExistContact;
  };
  const handleAddContact = event => {
    event.preventDefault();
    if (handleChekUnique(name)) {
      dispatch(addContact({ id: nanoid(), name, number }));
      reset();
    }
  };

  return (
    <Form onSubmit={handleAddContact}>
      <Label>Name</Label>
      <input
        placeholder="Enter your name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label>Number </Label>
      <input
        placeholder="Enter your number"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button>add Contact</Button>
    </Form>
  );
};

import { ContactList } from './ContackList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  // const contacts = useSelector(state => state.contacts);

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      <Filter />
      <ContactList />
    </section>
  );
};

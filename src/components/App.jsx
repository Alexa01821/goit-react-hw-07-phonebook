import { Container } from './AppStyled';
import { FormRegistration } from './FormRegistration/FormRegistration';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1 className="title">Phonebook</h1>
      <section className="contact-registration">
        <FormRegistration />
      </section>
      <section className="contacts">
        <h2 className="contacts-title">Contacts</h2>
        {(contacts && contacts.length > 0) ? (
          <Filter />
        ) : (
          Notify.failure('Your phonebook is empty. Add first contact!')
        )}
        <ContactsList />
      </section>
    </Container>
  );
};

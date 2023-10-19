import { Container } from './AppStyled';
import { FormRegistration } from './FormRegistration/FormRegistration';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Container>
      <h1 className="title">Phonebook</h1>
      <section className="contact-registration">
        <FormRegistration />
      </section>
      <section className="contacts">
        <h2 className="contacts-title">Contacts</h2>
        <Filter />
        <ContactsList />
      </section>
    </Container>
  );
};

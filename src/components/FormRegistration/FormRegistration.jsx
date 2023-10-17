import { useDispatch, useSelector } from 'react-redux';
import { FormSection } from './FormRegistrationStyled';
import { selectContacts } from 'redux/selectors';
import { Notify } from 'notiflix';
import { addContact } from 'redux/operations';

export const FormRegistration = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const isTrue = contacts.some(contact => contact.name === name);
    if (isTrue) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <FormSection>
      <h2 className="contact-registration-title">Registration</h2>
      <form className="contact-registration" onSubmit={handleSubmit}>
        <label className="contact-registration-label">
          Name
          <input
            className="contact-registration-input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoComplete="off"
            required
          />
        </label>
        <label className="contact-registration-label">
          Number
          <input
            className="contact-registration-input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            autoComplete="off"
            required
          />
        </label>
        <button type="submit" className="contact-registration-btn">
          Add contact
        </button>
      </form>
    </FormSection>
  );
};

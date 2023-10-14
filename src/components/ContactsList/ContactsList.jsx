import { deleteContact } from 'redux/contactsSlice';
import { ContactsListStyled } from './ContactsListStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, valueFilter) => {
  if (valueFilter !== null || valueFilter !== '') {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(valueFilter.toLowerCase().trim())
    );
  }
};

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const valueFilter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, valueFilter);

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactsListStyled>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li className="contacts-item" key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button
              type="button"
              className="contact-registration-btn"
              onClick={() => {
                removeContact(id);
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </ContactsListStyled>
  );
};

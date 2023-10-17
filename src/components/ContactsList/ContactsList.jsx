import { ContactsListStyled } from './ContactsListStyled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

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

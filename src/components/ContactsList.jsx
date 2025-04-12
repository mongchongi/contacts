import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useContactsStore from '../stores/useContactsStore';

const ContactsList = ({ keyword }) => {
  const contacts = useContactsStore((state) => state.contacts);
  const deleteContact = useContactsStore((state) => state.deleteContact);

  const filteredContacts = keyword
    ? contacts.filter((contact) => contact.name.toLowerCase().includes(keyword))
    : contacts;

  return (
    <List sx={{ width: '100%', overflowY: 'auto', height: 'calc(100vh - 64px)', padding: '0' }}>
      {filteredContacts.map((contact) => (
        <ListItem
          key={contact.id}
          sx={{ transition: 'background 0.5s', cursor: 'pointer', '&:hover': { bgcolor: 'rgb(56, 116, 203, 0.1)' } }}
        >
          <ListItemAvatar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mr: '10px' }}>
            <AccountCircleIcon color='primary' sx={{ fontSize: '50px' }} />
          </ListItemAvatar>
          <ListItemText primary={contact.name} secondary={contact.phoneNumber} />
          <Button variant='contained' onClick={() => deleteContact(contact.id)}>
            <DeleteForeverIcon />
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactsList;

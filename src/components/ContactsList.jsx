import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useContactsStore from '../stores/useContactsStore';

const ContactsList = () => {
  const contacts = useContactsStore((state) => state.contacts);

  return (
    <List sx={{ width: '100%', overflowY: 'auto', height: 'calc(100vh - 64px)', padding: '0' }}>
      {contacts.map((contact) => (
        <ListItem
          key={contact.id}
          sx={{ transition: 'background 0.5s', cursor: 'pointer', '&:hover': { bgcolor: 'rgb(56, 116, 203, 0.1)' } }}
        >
          <ListItemAvatar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mr: '10px' }}>
            <AccountCircleIcon color='primary' sx={{ fontSize: '50px' }} />
          </ListItemAvatar>
          <ListItemText primary={contact.name} secondary={contact.phoneNumber} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactsList;

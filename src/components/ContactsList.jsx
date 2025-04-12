import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useContactsStore from '../stores/useContactsStore';

const ContactsList = () => {
  const contacts = useContactsStore((state) => state.contacts);

  return (
    <List sx={{ width: '100%', height: '600px' }}>
      {contacts.map((contact) => (
        <ListItem
          sx={{ transition: 'background 0.5s', cursor: 'pointer', '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.1)' } }}
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

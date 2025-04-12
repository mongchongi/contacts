import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import useContactsStore from '../stores/useContactsStore';

const ContactForm = () => {
  const [nameInput, setNameInput] = useState('');
  const [phoneNumberInput, setPhoneNumberInput] = useState('');
  const [open, setOpen] = useState(false);

  const addContact = useContactsStore((state) => state.addContact);

  const handleAddContact = () => {
    if (!nameInput.trim() || !phoneNumberInput.trim()) {
      setOpen(true);
      return;
    }

    addContact(nameInput, phoneNumberInput);

    setNameInput('');
    setPhoneNumberInput('');
  };

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
      <TextField
        id='standard-basic'
        label='이름'
        variant='standard'
        fullWidth
        value={nameInput}
        onChange={(event) => setNameInput(event.target.value)}
      />
      <TextField
        id='standard-basic'
        label='연락처'
        variant='standard'
        fullWidth
        value={phoneNumberInput}
        onChange={(event) => setPhoneNumberInput(event.target.value)}
      />
      <Button variant='contained' fullWidth sx={{ mt: '20px' }} onClick={handleAddContact}>
        추가하기
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-description' fontWeight={'bold'} textAlign={'center'}>
            이름 또는 연락처를 입력해 주세요.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default ContactForm;
const style = {
  position: 'absolute',
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: { xs: '90%', sm: '30%' },
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: '5px',
};

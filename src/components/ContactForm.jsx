import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import useContactsStore from '../stores/useContactsStore';

const ContactForm = () => {
  const [nameInput, setNameInput] = useState('');
  const [phoneNumberInput, setPhoneNumberInput] = useState('');

  const addContact = useContactsStore((state) => state.addContact);

  const handleAddContact = () => {
    if (!nameInput.trim() || !phoneNumberInput.trim()) {
      alert('이름 또는 연락처를 입력해 주세요.');
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
    </Box>
  );
};

export default ContactForm;

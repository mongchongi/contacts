import { create } from 'zustand';

const useContactsStore = create((set) => ({
  contacts: [],
  addContact: (name, phoneNumber) =>
    set((state) => ({ contacts: [...state.contacts, { id: Date.now(), name, phoneNumber }] })),
}));

export default useContactsStore;

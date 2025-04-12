import { create } from 'zustand';

const useContactsStore = create((set) => ({
  contacts: [],
  addContact: (name, phoneNumber) =>
    set((state) => ({ contacts: [...state.contacts, { id: Date.now(), name, phoneNumber }] })),
  deleteContact: (id) => set((state) => ({ contacts: state.contacts.filter((contact) => contact.id !== id) })),
}));

export default useContactsStore;

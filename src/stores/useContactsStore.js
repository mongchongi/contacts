import { create } from 'zustand';

const useContactsStore = create((set) => ({
  contacts: [],
}));

export default useContactsStore;

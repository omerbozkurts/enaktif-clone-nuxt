// stores/userStore.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    firstName: '',
    lastName: '',
    email: '',
    username: ''
  }),
  actions: {
    setUser(userData: { firstName: string, lastName: string, email: string, username: string }) {
      this.firstName = userData.firstName;
      this.lastName = userData.lastName;
      this.email = userData.email;
      this.username = userData.username;
    }
  }
});

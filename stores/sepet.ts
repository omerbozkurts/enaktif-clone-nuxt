// stores/sepet.ts
import { defineStore } from 'pinia';

export const useCartStore = defineStore('sepet', {
  state: () => ({
    items: [] as { id: string; title: string; price: number; quantity: number, resim:string }[], // BOŞ DİZİ
  }),
  getters: {
    totalPrice: (state) =>
      (state.items.reduce((total, item) => total + item.price * item.quantity, 0) / 100).toFixed(2),
  },
  actions: {
    addToCart(product: { id: string; title: string; price: number;resim :string }) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: string) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
  },
});

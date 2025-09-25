import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        items: [] as { id: number; name: string; price: number; qty: number }[],
    }),

    getters: {
        productsCount: (state) => state.items.length,
        itemsCount: (state) =>
            state.items.reduce((sum, item) => sum + item.qty, 0),
        total: (state) =>
            state.items.reduce((sum, item) => sum + item.price * item.qty, 0),
    },

    actions: {
        addItem(item: { id: number; name: string; price: number }) {
            const existing = this.items.find((i) => i.id === item.id);
            if (existing) {
                existing.qty++;
            } else {
                this.items.push({ ...item, qty: 1 });
            }
        },

        removeItem(id: number) {
            this.items = this.items.filter((i) => i.id !== id);
        },

        decrementItem(id: number) {
            const existing = this.items.find((i) => i.id === id);
            if (!existing) return;
            if (existing.qty > 1) {
                existing.qty--;
            } else {
                this.removeItem(id);
            }
        },

        clearCart() {
            this.items = [];
        },
    },
});

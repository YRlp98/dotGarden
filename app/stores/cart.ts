import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        items: [] as { id: number; name: string; price: number; qty: number }[],
    }),
    actions: {
        addItem(item: { id: number; name: string; price: number }) {
            const existing = this.items.find((i) => i.id === item.id);
            if (existing) existing.qty++;
            else this.items.push({ ...item, qty: 1 });
        },
        removeItem(id: number) {
            this.items = this.items.filter((i) => i.id !== id);
        },
        clearCart() {
            this.items = [];
        },
    },
    getters: {
        total: (state) =>
            state.items.reduce((sum, i) => sum + i.price * i.qty, 0),
    },
});

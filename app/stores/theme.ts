import { defineStore } from 'pinia'
import { useColorMode } from '#imports'

const isClient = () => typeof window !== 'undefined'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: 'light', // Default theme
        locale: 'en', // Default locale
        isHamburgerOpen: false,
    }),
    getters: {

        hamburgerOpen: (state) => state.isHamburgerOpen,

    },
    actions: {
        toggleHamburger() {
            this.isHamburgerOpen = !this.isHamburgerOpen
        }
    },
})
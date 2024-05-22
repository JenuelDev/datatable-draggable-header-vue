import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", () => {
    const isDark = ref(false);

    function toggleTheme() {
        isDark.value = !isDark.value;

        const html = document.documentElement;

        html.classList.toggle("dark");
        html.classList.toggle("light");
    }

    return { isDark, toggleTheme };
});

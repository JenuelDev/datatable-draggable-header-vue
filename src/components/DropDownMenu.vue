<script setup lang="ts">
import { useListStore } from "@/stores/listStore";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const showDropDown = ref(false);
const listStore = useListStore();
</script>
<template>
    <div class="relative" v-click-outside="() => (showDropDown = false)">
        <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="py-2.5 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="button"
            @click="showDropDown = !showDropDown"
        >
            <Icon icon="material-symbols:more-vert" />
        </button>

        <!-- Dropdown menu -->
        <div
            id="dropdown"
            class="absolute right-0 z-10 bg-white rounded-lg w-44 dark:bg-gray-600 shadow-xl p-4 -bottom-18 flex flex-col gap-2"
            :class="{ hidden: !showDropDown }"
        >
            <label
                v-for="item in listStore.headers"
                :key="item.key"
                class="inline-flex items-center cursor-pointer"
            >
                <input v-model="item.show" type="checkbox" value="" class="sr-only peer" />
                <div
                    class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                ></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {{ item.label }}
                </span>
            </label>
        </div>
    </div>
</template>

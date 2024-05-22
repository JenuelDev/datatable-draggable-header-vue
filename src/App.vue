<script setup lang="ts">
import draggable from "vuedraggable";
import ThemeChangerButton from "./components/ThemeChangerButton.vue";
import { useListStore } from "./stores/listStore";
import DropDownMenu from "./components/DropDownMenu.vue";
import { Icon } from "@iconify/vue/dist/iconify.js";

const listStore = useListStore();
</script>

<template>
    <div class="px-4 max-w-5xl mx-auto mt-10">
        <div class="mb-7 flex items-center justify-between">
            <div class="flex gap-2 items-center">
                <p class="text-gray-700 text-4xl dark:text-white font-bold flex items-center gap-2">
                    <Icon icon="mdi:book-open-page-variant" />
                    Books
                </p>
            </div>
            <div class="flex items-center gap-3">
                <DropDownMenu />
                <ThemeChangerButton />
            </div>
        </div>
        <div class="w-full overflow-auto shadow-lg rounded-md">
            <table
                class="w-full min-w-96 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md overflow-hidden"
            >
                <thead
                    class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
                >
                    <draggable
                        v-model="listStore.headers"
                        tag="tr"
                        item-key="key"
                        v-bind="listStore.options"
                        @start="listStore.dragging = true"
                        @end="listStore.dragging = false"
                        :move="listStore.onMove"
                    >
                        <template #item="{ element }">
                            <th v-if="element.show" scope="col" class="px-6 py-3 cursor-move">
                                {{ element.label }}
                            </th>
                        </template>
                    </draggable>
                </thead>
                <tbody>
                    <tr
                        v-for="item in listStore.list"
                        :key="item.id"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <template v-for="header in listStore.renderHeader" :key="header.key">
                            <td
                                v-if="
                                    listStore.headers[
                                        listStore.headers.findIndex(
                                            (item) => item.key === header.key
                                        )
                                    ].show
                                "
                                class="px-6 py-4"
                                :class="{
                                    'font-medium text-gray-900 whitespace-nowrap dark:text-white':
                                        header.key === 'title',
                                }"
                            >
                                {{ (item as any)[header.key] }}
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

import { ref, computed, watch, onMounted } from "vue";
import { defineStore } from "pinia";

export const useListStore = defineStore("listStore", () => {
    const options = {
        animation: 200,
        group: "lists",
        onEnd: () => {
            renderHeader.value = JSON.parse(JSON.stringify(headers.value));
        },
    };

    const headers = ref([
        {
            key: "id",
            label: "ID",
            show: true,
        },
        {
            key: "title",
            label: "Title",
            show: true,
        },
        {
            key: "author",
            label: "Author",
            show: true,
        },
        {
            key: "year",
            label: "Year",
            show: true,
        },
        {
            key: "publisher",
            label: "Publisher",
            show: true,
        },
    ]);

    const renderHeader = ref<Array<any>>(JSON.parse(JSON.stringify(headers.value)));

    const dragging = ref(false);
    const list = ref([
        {
            id: "232GHK",
            author: "J.K. Rowling",
            title: "Harry Potter and the Philosopher's Stone",
            year: "1997",
            publisher: "Bloomsbury",
        },
        {
            id: "SDF234",
            author: "J.R.R. Tolkien",
            title: "The Hobbit",
            year: "1937",
            publisher: "Houghton Mifflin",
        },
        {
            id: "SDF235",
            author: "George R.R. Martin",
            title: "A Game of Thrones",
            year: "1996",
            publisher: "Houghton Mifflin",
        },
        {
            id: "SDF236",
            author: "George R.R. Martin",
            title: "A Clash of Kings",
            year: "1998",
            publisher: "Houghton Mifflin",
        },
    ]);

    function swapElements(arr: any[], index1: number, index2: number) {
        const temp = arr[index1];
        const temp2 = arr[index2];

        arr[index1] = temp2;
        arr[index2] = temp;
        return arr;
    }

    function onMove(event: any) {
        const beingDraggedKey = event.draggedContext.element.key;
        const beingDraggedTo = event.relatedContext.element.key;

        const arrayList = JSON.parse(JSON.stringify(renderHeader.value));
        const beingDraggedIndex = arrayList.findIndex((item: any) => item.key === beingDraggedKey);
        const beingDraggedToIndex = arrayList.findIndex((item: any) => item.key === beingDraggedTo);

        const newList = swapElements(arrayList, beingDraggedIndex, beingDraggedToIndex);

        renderHeader.value = JSON.parse(JSON.stringify(newList));
    }

    return {
        options,
        headers,
        list,
        dragging,
        renderHeader,
        onMove,
    };
});

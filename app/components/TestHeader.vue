<script lang="ts" setup>
import { VueDraggable } from 'vue-draggable-plus';

const list = ref([
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
    {
        id: 6,
    },
    {
        id: 7,
    },
    {
        id: 8,
    },
    {
        id: 9,
    },
    {
        id: 10,
    },
    {
        id: 11,
    },
    {
        id: 12,
    },
    {
        id: 13,
    },
    {
        id: 14,
    },
    {
        id: 15,
    },
]);
</script>

<template>
    <VueDraggable
        v-model="list"
        class="header"
        :delay="100"
        :delay-on-touch-only="true"
        :animation="300"
        easing="ease-in-out"
        :invert-swap="true"
    >
        <div v-for="item in list" :key="item.id" class="box" :class="[`box-${item.id}`]">
            {{ item.id }}
        </div>
    </VueDraggable>
</template>

<style lang="postcss" scoped>
.header {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    min-height: 100vh;
    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        font-size: 40px;
        aspect-ratio: 1;
    }
    .box-1 {
        background-color: red;
    }
    .box-2 {
        background-color: blue;
    }
    .box-3 {
        background-color: rgb(253, 165, 14);
    }
    .box-4 {
        background-color: yellow;
    }
    .box-5 {
        background-color: purple;
    }
    .box-6 {
        background-color: rgb(0, 255, 68);
    }
    .box-7 {
        background-color: gray;
    }
    .box-8 {
        background-color: rgb(255, 0, 204);
    }
    .box-9 {
        background-color: whites;
    }
    .box-10 {
        background-color: rosybrown;
    }
    .box-11 {
        background-color: tomato;
    }
    .box-12 {
        background-color: teal;
    }
}
</style>

<script setup lang="ts">
import { toRefs } from "vue";
import Item from "./components/Item.vue";
import SearchBar from "./components/SearchBar.vue";
import AddButton from "./components/AddButton.vue";

import { useAppStore } from "./store/app";

const { state } = useAppStore();
const { searchValue, items, itemsFillted } = toRefs(state);
</script>

<template>
  <main class="flex justify-center items-center flex-col">
    <section class="w-[500px] m-auto">
      <h1 class="text-xl font-bold mt-6 mb-4">Dynamic Form</h1>
      <SearchBar v-model="searchValue" />
      <Item
        v-for="item in items"
        :key="item.id"
        :item="item"
        :isHighlight="itemsFillted.includes(item.id)"
      />
      <AddButton />
    </section>
  </main>
</template>

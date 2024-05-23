<template>
  <FloatLabel class="w-full my-6">
    <InputText
      class="w-full"
      id="search"
      type="text"
      v-model="searchValue"
      data-cy="search-input"
    />
    <label for="search">Search</label>
  </FloatLabel>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import { useAppStore } from "../store/app";
import { toRefs } from "vue";
const { state } = useAppStore();
const { searchValue } = toRefs(state);
</script>

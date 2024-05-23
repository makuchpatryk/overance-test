<template>
  <Toast data-cy="toast" />
  <Button
    data-cy="add-button"
    class="w-full my-2"
    label="Add input field"
    @click="onAdd"
    :disabled="errorMessage.length > 0"
  />
  <span
    data-cy="error-message"
    v-if="errorMessage"
    class="w-full text-red-500"
    >{{ errorMessage }}</span
  >
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Toast from "primevue/toast";

import { useAppStore } from "../store/app";
import { toRefs } from "vue";

const { state, onAdd } = useAppStore();
const { errorMessage } = toRefs(state);
</script>

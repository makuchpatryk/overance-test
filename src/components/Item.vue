<script setup lang="ts">
import InputText from "primevue/inputtext";
import Badge from "primevue/badge";
import Button from "primevue/button";
import { computed } from "vue";
import Transition from "./Transition.vue";
import { useAppStore } from "../store/app";
import { TItem } from "../types";

type TProps = {
  item: TItem;
  isHighlight: boolean;
};
const props = defineProps<TProps>();

const { onRemove } = useAppStore();

const vowelsCount = computed(() => {
  return props.item.text
    ? Array.from(props.item.text).filter((letter) => "aeiou".includes(letter))
        .length
    : "0";
});
</script>

<template>
  <Transition>
    <div :class="`flex gap-1 justify-center items-center`">
      <InputText
        data-cy="item"
        :style="
          props.isHighlight ? { backgroundColor: 'rgba(27, 190, 10, 0.2)' } : {}
        "
        :class="`w-full my-2`"
        type="text"
        filled
        v-model="props.item.text"
      />
      <Badge data-cy="badge" :value="vowelsCount"></Badge>
      <Button
        data-cy="remove-button"
        label="Remove"
        severity="danger"
        @click="() => onRemove(props.item.id)"
      />
    </div>
  </Transition>
</template>

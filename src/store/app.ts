import { defineStore } from "pinia";
import { reactive, watch } from "vue";
import { v4 as uuidv4 } from "uuid";
import useToastLocal from "../composable/useToastLocal";
import { TApp } from "../types";

export const useAppStore = defineStore("app", () => {
  const state = reactive<TApp>({
    items: [
      {
        id: uuidv4(),
        text: "test 1",
      },
      {
        id: uuidv4(),
        text: "test 2",
      },
      {
        id: uuidv4(),
        text: "test 3",
      },
    ],
    itemsFillted: [],
    errorMessage: "",
    searchValue: "",
  });
  const { showToast } = useToastLocal();

  const setState = <K extends keyof TApp>(k: K, value: TApp[K]) => {
    state[k] = value;
  };

  const onAdd = () => {
    if (state.items.length >= 10) {
      showToast({
        severity: "error",
        summary: "Error Message",
        detail: "Maximum limit of inputs is 10 fields.",
      });
      setState("errorMessage", "Maximum limit of inputs is 10 fields.");
      return;
    }
    if (state.errorMessage) {
      setState("errorMessage", "");
    }

    setState("items", [...state.items, { text: "", id: uuidv4() }]);
  };

  const onRemove = (id: string) => {
    setState(
      "items",
      state.items.filter((i) => {
        return i.id !== id;
      })
    );
  };

  watch(
    () => state.searchValue,
    () => {
      if (!state.searchValue) {
        state.itemsFillted = [];
        return;
      }
      setState(
        "itemsFillted",
        state.items
          .filter((i) => {
            return i.text.includes(state.searchValue);
          })
          .map((i) => i.id)
      );
    }
  );

  return {
    state,
    setState,
    onAdd,
    onRemove,
  };
});

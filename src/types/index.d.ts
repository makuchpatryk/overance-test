export type TItem = {
  id: string;
  text: string;
};

export type TApp = {
  errorMessage: string;
  searchValue: string;
  items: TItem[];
  itemsFillted: string[];
};

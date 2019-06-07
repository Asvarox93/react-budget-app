export interface Props {
  listData: Array<object>;
  strikethroughItems: (id: number) => void;
  strikethrough: Array<number>;
  handleRemoveItem: (id: string) => void;
}

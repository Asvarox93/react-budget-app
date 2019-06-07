export type Data = {
  id: number;
  description: string;
  added: string;
  amount: string;
};

export interface Props {
  listData: Array<object>;
  removeItem: (id: string) => void;
}

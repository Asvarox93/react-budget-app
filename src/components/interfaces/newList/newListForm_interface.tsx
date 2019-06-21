export interface Props {
  listName: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validateInputs: (e?: React.FormEvent<HTMLFormElement>) => void;
  errors: string[];
}

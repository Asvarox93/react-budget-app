export interface Props {
  list: string;
  handleListChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  note: string;
  handleNoteChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validateInputs: (e?: React.FormEvent<HTMLFormElement>) => void;
  setSelectOption: () => Array<RangeType>;
  errors: string[];
}
type RangeType = { value: string; label: string };

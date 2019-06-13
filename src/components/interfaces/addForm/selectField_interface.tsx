export interface Props {
  value: string;
  label: string;
  valueVerible?: string;
  range: Array<RangeType>;
  handleChange: Function;
}

type RangeType = {
  value: string;
  label: string;
};

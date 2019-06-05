import React from "react";
import {
  TextField,
  MenuItem,
  makeStyles,
  Fab,
  Grid,
  Paper,
  SnackbarContent,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ErrorIcon from "@material-ui/icons/Error";
import clsx from "clsx";
import * as addFormInterfaces from "../../interfaces/addForm_interface";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 300
  },
  button: {
    margin: theme.spacing(1),
    alignSelf: "center"
  },
  form: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
    justifyContent: "center"
  },

  snackbarHidden: {
    visibility: "hidden",
    opacity: 0,
    height: 0,
    transition: "all 0.4s ease-in-out"
  },
  snackbar: {
    visibility: "visible",
    opacity: 1,
    height: "auto",
    backgroundColor: theme.palette.error.dark,
    justifyContent: "center",
    transition: "all 0.4s ease-in-out"
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
  messageErrors: {
    display: "flex",
    flexDirection: "column"
  }
}));

const ranges = [
  {
    value: "Incomes",
    label: "Incomes"
  },
  {
    value: "Expenses",
    label: "Expenses"
  }
];

const AddForm: React.FC<addFormInterfaces.Props> = props => {
  const classes = useStyle();
  const { addToBudget } = props;

  const [values, setValues] = React.useState({
    amount: "",
    budgetType: "",
    description: ""
  });
  const [errors, setErrors] = React.useState<string[]>([]);
  const [snackbar, setScnakbar] = React.useState<boolean>(false);

  const handleChange = (prop: string) => (event: {
    target: { value: number | string };
  }) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const validateInputs = () => {
    const amount = values.amount;
    const budgetType = values.budgetType;
    const description = values.description;
    let inputErrors: string[] = [];
    /* eslint-disable */
    // prettier-ignore
    const amountReg = RegExp(/^(0|([1-9][0-9]*))(\.[0-9]+)?$/);
    /* eslint-enable */

    if (!amount || !budgetType || !description)
      inputErrors = [...inputErrors, "Fields cannot be empty!"];

    if (amount && !amountReg.test(amount))
      inputErrors = [
        ...inputErrors,
        "Amount cannot contains any characters and comma!"
      ];
    if (description && description.length < 3)
      inputErrors = [
        ...inputErrors,
        "Description must contains min. 3 characters!"
      ];

    if (inputErrors.length > 0) {
      setErrors(inputErrors);
      setScnakbar(true);
      return;
    }
    setScnakbar(false);
    handleSubmit();
  };

  const handleSubmit = () => {
    addToBudget(values);
  };

  return (
    <Grid item xs={12}>
      <SnackbarContent
        className={snackbar ? classes.snackbar : classes.snackbarHidden}
        aria-describedby="client-snackbar"
        message={
          <span className={classes.message}>
            <ErrorIcon className={classes.margin} />
            <span className={classes.messageErrors}>
              {errors.map((err, index) => {
                return (
                  <Typography key={index} variant="body2">
                    {err}
                  </Typography>
                );
              })}
            </span>
          </span>
        }
      />
      <Paper className={classes.form}>
        <form className={classes.root}>
          <TextField
            select
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            label="Budget Type"
            value={values.budgetType}
            onChange={handleChange("budgetType")}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-adornment-amount"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            label="Description"
            value={values.description}
            onChange={handleChange("description")}
          />
          <TextField
            id="outlined-adornment-amount"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            label="Amount"
            value={values.amount}
            onChange={handleChange("amount")}
          />
          <Fab
            size="small"
            color="secondary"
            aria-label="Add"
            className={classes.button}
            onClick={validateInputs}
          >
            <AddIcon />
          </Fab>
        </form>
      </Paper>
    </Grid>
  );
};

export default AddForm;

//TODO: This component need to be breaked into few pieces

import { Grid, Input, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@mui/material";
const fields = [
  {
    value: "Label",
    label: "Label",
  },
  {
    value: "TextBox",
    label: "TextBox",
  },
  {
    value: "TextArea",
    label: "TextArea",
  },
  {
    value: "Button",
    label: "Button",
  },
];
const types = [
  {
    value: "Number",
    label: "Number",
  },
  {
    value: "String",
    label: "String",
  },
  {
      value: 'Boolean',
    label: "Boolean",
  },
  {
    value: "BigInt",
    label: "BigInt",
  },
  {
    value: "Undefined",
    label: "Undefined",
  },
];

const FormChecker = () => {
  const [field, setField] = React.useState();

  const handleChange = (event) => {
    setField(event.target.value);
  };
  const [type, setType] = React.useState();

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={6} >
          <img src="sample.jpeg" />
        </Grid>
        
        <Grid item md={6} >
          <Grid container spacing={2} direction="column" style={{border:'2px solid black'}}>
            <Grid item>
              <TextField
                id="outlined-select-currency"
                select
                label="Fields"
                value={field}
                onChange={handleChange}
                helperText="Please select field"
              >
                {fields.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                id="outlined-select-currency"
                select
                label="Type"
                value={type}
                onChange={handleChangeType}
                helperText="Please select type"
              >
                {types.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item>
              <RadioGroup>
                <FormControlLabel
                  value="Required"
                  control={<Radio />}
                  label="Required"
                />
              </RadioGroup>
            </Grid>
            <Grid item>
              <Typography>Error Message</Typography>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                placeholder="Minimum 3 rows"
                style={{ width: 300 }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" style={{marginBottom:5}}>Next</Button>
            </Grid>
          </Grid>
          <Button variant="contained" style={{marginTop:5}}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormChecker;

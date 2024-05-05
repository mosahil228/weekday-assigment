import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function JobType() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ width: "100%" }} size="small">
      <InputLabel id="demo-select-small-label" className="menuItem">Job type</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Job type"
        onChange={handleChange}
        className="menuItem"
      >
        <MenuItem className="menuItem" value={"Remote"}>Remote</MenuItem>
        <MenuItem className="menuItem" value={"Hybrid"}>Hybrid</MenuItem>
        <MenuItem className="menuItem" value={"In-office"}>In-office</MenuItem>
      </Select>
    </FormControl>
  );
}
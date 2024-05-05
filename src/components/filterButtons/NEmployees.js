import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function NEmployess() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{  width: "100%" }} size="small">
      <InputLabel id="demo-select-small-label" className="menuItem">Employees</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Employees"
        onChange={handleChange}
        className="menuItem"
      >
        <MenuItem className="menuItem" value={"1-10"}>1-10</MenuItem>
        <MenuItem className="menuItem" value={"11-20"}>11-20</MenuItem>
        <MenuItem className="menuItem" value={"21-30"}>21-30</MenuItem>
        <MenuItem className="menuItem" value={"31-40"}>31-40</MenuItem>
        <MenuItem className="menuItem" value={"41-50"}>41-50</MenuItem>
        <MenuItem className="menuItem" value={"51-60"}>51-60</MenuItem>
      </Select>
    </FormControl>
  );
}
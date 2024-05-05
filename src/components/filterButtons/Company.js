import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Company() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ width: "100%" }} size="small">
      <InputLabel id="demo-select-small-label" className="menuItem">Company</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Company"
        onChange={handleChange}
        className="menuItem"
      >
        <MenuItem className="menuItem" value={10}>Ten</MenuItem>
        <MenuItem className="menuItem" value={20}>Twenty</MenuItem>
        <MenuItem className="menuItem" value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
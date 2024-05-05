import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Salary() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ width: "100%" }} size="small">
      <InputLabel id="demo-select-small-label" className="menuItem">Minimum Salary</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Minimum Salary"
        onChange={handleChange}
        className="menuItem"
      >
        <MenuItem className="menuItem" value={10}>10L</MenuItem>
        <MenuItem className="menuItem" value={20}>20L</MenuItem>
        <MenuItem className="menuItem" value={30}>30L</MenuItem>
        <MenuItem className="menuItem" value={40}>40L</MenuItem>
        <MenuItem className="menuItem" value={50}>50L</MenuItem>
        <MenuItem className="menuItem" value={60}>60L</MenuItem>
        
        
      </Select>
    </FormControl>
  );
}
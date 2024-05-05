import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Experience() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{width: "100%" }} size="small">
      <InputLabel id="demo-select-small-label" className="menuItem">Experience</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Experience"
        onChange={handleChange}
        className="menuItem"
      >
        <MenuItem className="menuItem" value={"1"}>1</MenuItem>
        <MenuItem className="menuItem" value={"2"}>2</MenuItem>
        <MenuItem className="menuItem" value={"3"}>3</MenuItem>
        <MenuItem className="menuItem" value={"4"}>4</MenuItem>
        <MenuItem className="menuItem" value={"5"}>5</MenuItem>
        <MenuItem className="menuItem" value={"6"}>6</MenuItem>
        <MenuItem className="menuItem" value={"7"}>7</MenuItem>
        <MenuItem className="menuItem" value={"8"}>8</MenuItem>
        <MenuItem className="menuItem" value={"9"}>9</MenuItem>
        <MenuItem className="menuItem" value={"10"}>10</MenuItem>
        
      </Select>
    </FormControl>
  );
}
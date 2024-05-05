import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RolesButton() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ width: "100%" }} size="small">
      <InputLabel id="demo-select-small-label" className="menuItem">Roles</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Roles"
        onChange={handleChange}
        className="menuItem"
      >
        <MenuItem className="menuItem" value={"Backend"}>Backend</MenuItem>
        <MenuItem className="menuItem" value={"Frontend"}>Frontend</MenuItem>
        <MenuItem className="menuItem" value={"Full stack"}>Full stack</MenuItem>
        <MenuItem className="menuItem" value={"Flutter"}>Flutter</MenuItem>
        <MenuItem className="menuItem" value={"Ios"}>Ios</MenuItem>
        <MenuItem className="menuItem" value={"React Native"}>React Native</MenuItem>
        <MenuItem className="menuItem" value={"Android"}>Android</MenuItem>
        <MenuItem className="menuItem" value={"Tech Lead"}>Tech Lead</MenuItem>
      </Select>
    </FormControl>
  );
}
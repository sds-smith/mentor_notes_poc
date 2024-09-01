
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoComplete({options, label, selected, setSelected, optionLabel='label', readOnly=false}) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      value={selected}
      onChange={(_, newValue) => {
        setSelected(newValue);
      }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
      getOptionLabel={option => option[optionLabel] || option}
      readOnly={readOnly}
    />
  );
}

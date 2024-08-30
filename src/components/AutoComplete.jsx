
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoComplete({options, label, selected, setSelected, readOnly=false}) {
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
      readOnly={readOnly}
    />
  );
}

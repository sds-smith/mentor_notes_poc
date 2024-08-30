
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';

export default function SessionNotes() {

    return (
      <>
        <Grid size={{xs: 1}}></Grid>
        <Grid size={{xs: 10}} display='flex' justifyContent='center'>
          <TextField 
              label="Mentor Report"
              variant="outlined"
              multiline
              fullWidth
              placeholder=''
              minRows={5}
          />
        </Grid>
        <Grid size={{xs: 1}}></Grid>
      </>
    )
}
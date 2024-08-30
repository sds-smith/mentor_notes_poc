
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';

export default function WeeklyPlan() {

    return (
      <>
        <Grid size={{xs: 1}}></Grid>
        <Grid size={{xs: 10}} display='flex' justifyContent='center'>
          <TextField 
              label="Your Weekly Plan"
              variant="outlined"
              multiline
              fullWidth
              placeholder='Your plans for the week, based on instructor meeting, assignments, your relationship with the mentees, etc.'
              minRows={5}
          />
        </Grid>
        <Grid size={{xs: 1}}></Grid>
      </>
    )
}

import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import AutoComplete from '../components/AutoComplete';
import { options, label } from '../lib/weeksOptions';

export default function SelectWeek({selectedWeek, setSelectedWeek}) {

    return (
      <>
          <Grid container size={12}>
              <Grid size={{xs: 12, md: 4}} display='flex' justifyContent='center' >
                  <AutoComplete
                      options={options}
                      label={label}
                      selected={selectedWeek}
                      setSelected={setSelectedWeek}
                  />
              </Grid>
              <Grid  size={{xs: 12, md: 4}}>
                {
                    selectedWeek &&
                    <Typography variant='h4' textAlign='center'>mm/dd/yyyy - mm/dd/yyyy</Typography>
                }
              </Grid>
              <Grid size={{xs: 12, md: 4}}>

              </Grid>
          </Grid>
      </>
    )
}
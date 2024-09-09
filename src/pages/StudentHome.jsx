import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import SelectWeek from '@/components/SelectWeek';
import Tabs from '@/components/Tabs'

export default function StudentHome() {
    const [ selectedWeek, setSelectedWeek ] = useState(null);

    return (
      <>
          <Grid container size={12} justifyContent='center'>
              <SelectWeek 
                selectedWeek={selectedWeek}
                setSelectedWeek={setSelectedWeek}
              />
              { selectedWeek && <Tabs/> }
          </Grid>
      </>
    )
}

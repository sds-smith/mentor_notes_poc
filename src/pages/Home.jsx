import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from '@mui/material/Grid2';
import Typography from "@mui/material/Typography";
import FacultyHome from "./FacultyHome";
import StudentHome from "./StudentHome";
import { useAuthContext } from "../context/AuthContext";

export default function Home() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { currentUser } = useAuthContext();
    const no_access = currentUser?.role !== pathname.slice(1);

    useEffect(() => {
        if (no_access) navigate('/')
    }, [navigate, no_access])

    return (
      <Grid container>
        <Grid size={12}>
          <Typography 
            component='h1' 
            variant='h2' 
            textAlign='center'
          >
            {`${currentUser?.first} ${currentUser?.last}`}
          </Typography>
        </Grid>
        { currentUser?.role === 'faculty' && <FacultyHome /> }
        { currentUser?.role === 'student_mentor' && <StudentHome /> }
      </Grid>
    )
}

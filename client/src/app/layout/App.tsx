import { Box, Container, CssBaseline } from "@mui/material";
//import { useState } from "react"
import NavBar from "./Navbar";
//import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { Outlet } from "react-router";

function App() {
  // const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  // const [editMode, setEditMode] = useState(false);
 // const {activities, isPending} = useActivities();

  // const handleSelectActivity = (id: string) => {
  //   setSelectedActivity(activities!.find(x => x.id === id));
  // }

  // const handleCancelSelectActivity = () => {
  //   setSelectedActivity(undefined);
  // }

  // const handleOpenForm = (id?: string) => {
  //   if (id) handleSelectActivity(id);
  //   else handleCancelSelectActivity();
  //   setEditMode(true);
  // }

  // const handleFormClose = () => {
  //   setEditMode(false);
  // }

  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
       
          <Outlet />
      </Container>
    </Box>

  )
}

export default App
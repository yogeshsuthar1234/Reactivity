import { Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  
  const [activities,setActivities]= useState<Activity[]>([]);

  useEffect(()=> {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response => setActivities(response.data))

    return () => {}
  },[])
  return (
    <>
    <Typography variant="h1" component="h2">
    Reactivities
</Typography>

    <List>
      {activities.map((activity) => (
        <ListItem key={activity.id}><ListItemText>{activity.title}</ListItemText></ListItem>
      ) )}
    </List>
    </>
  
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';




function App() {
  const [count, setCount] = useState(0)

  return (
<Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width: "100vh" }}>
         {/* Typography */}
        <Typography variant="h1">To Do List</Typography>
         {/* Text */}
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      <TextField sx={{width: "100%"}} id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
        </Box>
      </Container>
    
  )
}

export default App

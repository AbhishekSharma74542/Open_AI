import React from "react";
import { Box, Button } from "@mui/material";

const StepFour = () => {

  const onSubmit = () => {
    console.log('on submit')
  }

  return (
    <Box sx={{ pb: 8 }}>
      <Button variant="contained" onClick={onSubmit}>Submit</Button>
    </Box>
  )
}

export default StepFour

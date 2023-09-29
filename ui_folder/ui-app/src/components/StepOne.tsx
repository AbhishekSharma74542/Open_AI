import React from "react";
import { Box, Button, Typography } from "@mui/material";

const StepOne = () => {
  return (
    <Box sx={{ pb: 8 }}>
      <Typography variant="overline" display="block" gutterBottom>
        Step 1: Click to create the embeddings
      </Typography>
      <Button variant="outlined">create embeddings</Button>
    </Box>
  )
}

export default StepOne

import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const StepThree = () => {
  
  return (
    <Box sx={{ pb: 8 }}>
      <Typography variant="overline" display="block" gutterBottom>
        Step 3: input text
      </Typography>
      <TextField
        placeholder="Enter Text"
        size="small"
        sx={{ width: 336 }}
      />
    </Box>
  )
}

export default StepThree

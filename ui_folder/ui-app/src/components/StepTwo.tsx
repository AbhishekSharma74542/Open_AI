import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";

const StepTwo = () => {
  return (
    <Box sx={{ pb: 8 }}>
      <Typography variant="overline" display="block" gutterBottom>
        Step 2: Select the option
      </Typography>
      <Stack spacing={8} direction="row">
        <Button variant="outlined" disabled>semantic search</Button>
        <Button variant="outlined" disabled>cluster</Button>
        <Button variant="outlined" disabled>summary</Button>
      </Stack>
    </Box>
  )
}

export default StepTwo

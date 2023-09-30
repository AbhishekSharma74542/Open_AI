import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useAppDispatch } from "../redux/Hook";
import { fetchInputText } from "../redux/thunks/InputText";

const StepThree = () => {
  const dispatch = useAppDispatch()

  const onInputText = (e: any) => {
    console.log('on input text', e.target.value)
    dispatch(fetchInputText(e.target.value))
  }
  
  return (
    <Box sx={{ pb: 8 }}>
      <Typography variant="overline" display="block" gutterBottom>
        Step 3: input text
      </Typography>
      <TextField
        placeholder="Enter Text"
        size="small"
        sx={{ width: 336 }}
        onChange={onInputText}
      />
    </Box>
  )
}

export default StepThree

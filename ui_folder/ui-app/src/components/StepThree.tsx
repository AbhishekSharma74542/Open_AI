import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/Hook";
import { fetchInputText } from "../redux/thunks/InputText";
import { setSearchTextQNA } from "../redux/thunks/QuestionAnswer";

const StepThree = () => {
  const dispatch = useAppDispatch();
  const { data: stepTwoData } = useAppSelector((state) => state.stepTwo);

  const enableText = stepTwoData === "semantic" || stepTwoData === "qna";

  const onInputText = (e: any) => {
    dispatch(fetchInputText(e.target.value));
  };

  const onQNAText = (e: any) => {
    dispatch(setSearchTextQNA(e.target.value));
  };

  const DisplayButton = () => {
    return (
      <Box sx={{ pb: 8 }}>
        <Typography variant="overline" display="block" gutterBottom>
          {enableText ? "Step 3: input text" : "Step 3: (Not Required)"}
        </Typography>
        {stepTwoData === "semantic" && (
          <TextField
            placeholder="Enter..."
            size="small"
            label="Search Text"
            sx={{ width: 336 }}
            onChange={onInputText}
          />
        )}
        {stepTwoData === "qna" && (
          <TextField
            placeholder="Enter Text..."
            label="Ask a Question"
            multiline
            rows={3}
            sx={{ width: 450 }}
            onChange={onQNAText}
          />
        )}
      </Box>
    );
  };

  return <DisplayButton />;
};

export default StepThree;

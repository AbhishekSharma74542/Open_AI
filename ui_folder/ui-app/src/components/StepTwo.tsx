import React from "react";
import { useAppDispatch } from "../redux/Hook";
import { Box, Typography } from "@mui/material";
import { fetchStepTwo } from "../redux/thunks/StepTwo";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const StepTwo = (props: any) => {
  const dispatch = useAppDispatch();

  // const btnClick = (e: any) => {
  //   dispatch(fetchStepTwo(e.target.name));
  // };

  const onClickRadioGroup = (e: any) => {
    dispatch(fetchStepTwo(e.target.value));
  };

  return (
    <Box sx={{ pb: 8 }}>
      <Typography variant="overline" display="block" gutterBottom>
        Step 2: Select the option
      </Typography>
      {/* <Stack spacing={8} direction="row" onClick={btnClick}>
        <Button
          variant="outlined"
          name="Semantic"
          disabled={!props.embed}
          onClick={onClickSemantic}
        >
          semantic search
        </Button>
        <Button variant="outlined" name="Cluster" disabled={!props.embed}>
          cluster
        </Button>
        <Button variant="outlined" name="QnA" disabled={!props.embed}>
          &nbsp;QnA&nbsp;
        </Button>
      </Stack> */}
      <FormControl>
        <RadioGroup defaultValue="semantic" row onChange={onClickRadioGroup}>
          <FormControlLabel
            sx={{ mr: 6 }}
            value="semantic"
            control={<Radio />}
            disabled={!props.embed}
            label="Semantic Search"
          />
          <FormControlLabel
            sx={{ mr: 6 }}
            value="qna"
            control={<Radio />}
            disabled={!props.embed}
            label="QnA"
          />
          <FormControlLabel
            sx={{ mr: 6 }}
            value="cluster"
            control={<Radio />}
            disabled={!props.embed}
            label="Cluster"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default StepTwo;

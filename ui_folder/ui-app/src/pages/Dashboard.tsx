import React, { ReactElement, FC } from "react";
import { Stack } from "@mui/material";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import StepFour from "../components/StepFour";

const Dashboard: FC<any> = (): ReactElement => {

  const style = {
    p: 3,
    flexGrow: 1,
    backgroundColor: "white",
    display: "block",
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px'  
  }

  return (
    <Stack
      direction="column"
      sx={{...style}}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
    </Stack>
  );
};

export default Dashboard;

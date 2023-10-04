import React from "react";
import { Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const StepOne = (props: any) => {
  const [loading, setLoading] = React.useState(false);

  const onClickEmbed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.onEmbed();
    }, 1000);
  };

  return (
    <Box sx={{ pb: 8 }}>
      <Typography variant="overline" display="block" gutterBottom>
        Step 1: Click to create the embeddings
      </Typography>
      <LoadingButton
        loading={loading}
        variant="contained"
        onClick={onClickEmbed}
      >
        create embeddings
      </LoadingButton>
    </Box>
  );
};

export default StepOne;

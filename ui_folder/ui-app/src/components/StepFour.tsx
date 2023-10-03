import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/Hook";
import { fetchSearchText } from "../redux/thunks/SearchText";
import Modal from "./Modal";

const StepFour = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.searchText.data);
  const [openModal, setOpenModal] = React.useState(false);

  useEffect(() => {
    if (data.length > 0) setOpenModal(true);
  }, [data]);

  const getData = () => dispatch(fetchSearchText());

  return (
    <Box sx={{ pb: 8 }}>
      <Button variant="contained" onClick={() => getData()}>
        Submit
      </Button>
      <Modal open={openModal} close={() => setOpenModal(false)} />
    </Box>
  );
};

export default StepFour;

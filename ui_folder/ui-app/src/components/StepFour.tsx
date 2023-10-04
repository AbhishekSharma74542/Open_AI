import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/Hook";
import { fetchSearchText } from "../redux/thunks/SearchText";
import { fetchClusterData } from "../redux/thunks/ClusterData";
import { fetchQuestionAnswer } from "../redux/thunks/QuestionAnswer";
import Modal from "./Modal";
import QuestionAnswer from "./QuestionAnswer";
import LoadingButton from "@mui/lab/LoadingButton";
import { resetClusterData } from "../redux/slices/ClusterData";

const StepFour = () => {
  const dispatch = useAppDispatch();
  const { data: searchData } = useAppSelector((state) => state.searchText);
  const { data: clusterData } = useAppSelector((state) => state.clusterData);
  const { data: stepTwoData } = useAppSelector((state) => state.stepTwo);
  const { data: qnaData } = useAppSelector((state) => state.QuestionAnswer);
  const [openModal, setOpenModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (searchData.length > 0) {
      setLoading(false);
      setOpenModal(true);
    }
  }, [searchData]);

  useEffect(() => {
    if (clusterData.clustered_sentences) {
      setLoading(false);
      setOpenModal(true);
    }
  }, [clusterData]);

  const getData = () => {
    dispatch(resetClusterData());
    if (stepTwoData === "semantic") {
      setLoading(true);
      dispatch(fetchSearchText());
    }
    if (stepTwoData === "cluster") {
      setLoading(true);
      setTimeout(() => {
        dispatch(fetchClusterData());
      }, 1000);
    }
    if (stepTwoData === "qna") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        dispatch(fetchQuestionAnswer());
      }, 1000);
    }
  };

  return (
    <Box sx={{ pb: 6 }}>
      {stepTwoData === "qna" && qnaData.length > 0 && <QuestionAnswer />}
      <Typography variant="overline" display="block" gutterBottom>
        Step 4: Submit
      </Typography>
      <LoadingButton
        loading={loading}
        variant="contained"
        onClick={() => getData()}
      >
        Submit
      </LoadingButton>
      {openModal && stepTwoData === "semantic" && (
        <Modal
          type={"semantic"}
          open={openModal}
          close={() => setOpenModal(false)}
        />
      )}
      {stepTwoData === "cluster" && (
        <Modal
          type={"cluster"}
          open={openModal}
          close={() => setOpenModal(false)}
        />
      )}
    </Box>
  );
};

export default StepFour;

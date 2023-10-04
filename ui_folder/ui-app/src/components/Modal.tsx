import React from "react";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CustomTable from "./CustomTable";
import { useAppSelector } from "../redux/Hook";
import Cluster from "./Cluster";

const Wrapper = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Modal = (props: any) => {
  const { open, close, type } = props;
  const { data: searchData } = useAppSelector((state) => state.searchText);
  const { data: clusterData } = useAppSelector((state) => state.clusterData);

  const handleClose = () => close(false);

  return (
    <>
      <Wrapper onClose={handleClose} open={open} fullWidth={true} maxWidth="lg">
        <DialogTitle sx={{ m: 0, p: 2 }}>{type} - result</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {type === "semantic" && searchData.length > 0 && (
            <CustomTable data={searchData} />
          )}
          {type === "cluster" && <Cluster data={clusterData} />}
        </DialogContent>
      </Wrapper>
    </>
  );
};

export default Modal;

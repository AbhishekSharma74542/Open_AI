import React, { FC, ReactElement } from "react";
import {
  Box,
  Container,
  Toolbar,
  Typography,
  AppBar,
} from "@mui/material";

const Navbar: FC = (): ReactElement => {

  const borderRadius = {
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    background: 'main'
  }

  return (
    <Box>
      <AppBar sx={{ ...borderRadius }} position="static" elevation={2}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Open AI - POC
            </Typography>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;

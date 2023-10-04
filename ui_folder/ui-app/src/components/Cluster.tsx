import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Cluster = (props: any) => {
  const { data } = props;
  const { clustered_sentences } = data;
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const list = Object.keys(clustered_sentences);

  return (
    <>
      <Grid container spacing={2}>
        {list.map((data, index) => (
          <Grid item xs={12} md={12} key={index}>
            <Typography variant="h6" display="block" gutterBottom>
              Cluster - {index}
            </Typography>
            <List dense={dense}>
              {clustered_sentences[data].map((entry: any, index: number) => (
                <Grid key={index}>
                  <ListItem dense>
                    <ListItemText
                      primary={entry}
                      secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>
                  <Divider component="li" />
                </Grid>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cluster;

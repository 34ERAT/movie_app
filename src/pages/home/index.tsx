import { Box, InputBase, Paper, TextField } from "@mui/material";
import React from "react";
import Layout from "../../Layout";
const Home = () => {
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="search for movies or tv series"
            // inputProps={{ "aria-label": "enter text" }}
            sx={{ width: "100%", }}
          ></InputBase>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Home;

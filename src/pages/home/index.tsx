import { Box, InputAdornment, InputBase, Paper } from "@mui/material";
import React, { SetStateAction, useState } from "react";
import Layout from "../../Layout";
import SearchIcon from "../../assets/icons/icon-search.svg"
const Home = () => {
  const [search, setSearch] = useState("")
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value)
  }
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
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img src={SearchIcon}
                  alt="searchIcon"
                  width={20}
                  height={20} />
              </InputAdornment>
            }
          ></InputBase>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Home;

import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React, { SetStateAction, useContext, useState } from "react";
import Layout from "../../Layout";
import SearchIcon from "../../assets/icons/icon-search.svg";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../components/context/movie-context";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };
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
            sx={{ width: "100%" }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img src={SearchIcon} alt="searchIcon" width={20} height={20} />
              </InputAdornment>
            }
          ></InputBase>
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">

            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Movies
              </Typography>
              <MovieList recommendList={search === "" ? movies : searchList} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography>Found {searchList.length} results for "{search}" {""}</Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Movies;

import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import { MovieDataType } from "../../assets/data";
import MovieCard from "../movie-card";
interface MovieListProps {
  recommendList: MovieDataType[];
}
const MovieList = ({ recommendList }: MovieListProps) => {
  console.log("the recommend list is ", recommendList)
  return (
    <Box sx={{
      display: "flex",
      gap: 2,
      overflowX: "scroll"

    }}>
      {recommendList.map((movie) => (
        <Grid>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <MovieCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  )
}

export default MovieList;

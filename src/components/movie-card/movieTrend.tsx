
import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../context/movie-context";
interface MovieTrendCardProps {
  movie: MovieDataType;
}
const MovieTrendCard = ({ movie }: MovieTrendCardProps) => {
  const { dispatch } = useContext(MovieContext)

  return (
    <Card key={movie.id} elevation={0} style={{ backgroundColor: "transparent" }} >
      <CardContent style={{
        padding: 0,
        position: "relative",
        // overflowX: "scroll",
        display: "flex"
      }}>
        <img src={movie.thumbnail.regular.large} alt="" style={{ width: "300px", height: "100%", borderRadius: "8px" }} />
        <Box position="absolute" top={0} left={0} right={0} bottom={0} bgcolor="rgba(0,0,0,0.6)"
          borderRadius="8px"
        />
      </CardContent>
    </Card>
  )
}
export default MovieTrendCard;

import { Box } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
const navLinks = [
  {
    name: "Home",
    icon: "H",
    link: "/"
  },
  {
    name: "Movies",
    icon: "H",
    link: "/movies"
  },
  {
    name: "Tv Series",
    icon: "H",
    link: "/tv-series"
  },
  {
    name: "Book Marks",
    icon: "H",
    link: "/bookmarks"
  }
];

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: "161d2f",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column"
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200
        }
      }}
    >
      <Box
      ></Box>
    </Box>
  );
};

export default Sidebar;

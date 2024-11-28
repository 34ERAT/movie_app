import { Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../../assets/icons/icon-nav-home.svg"
import MoviesIcon from "../../assets/icons/icon-nav-movies.svg"
import TvseriesIcon from "../../assets/icons/icon-nav-tv-series.svg"
import BookmarksIcon from "../../assets/icons/icon-nav-bookmark.svg"
const navLinks = [
  {
    name: "Home",
    icon: HomeIcon,
    link: "/"
  },
  {
    name: "Movies",
    icon: MoviesIcon,
    link: "/movies"
  },
  {
    name: "Tv Series",
    icon: TvseriesIcon,
    link: "/tv-series"
  },
  {
    name: "Book Marks",
    icon: BookmarksIcon,
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
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column"
          },
          gap: 5,
          alignItems: {
            xs: "center",
            ls: "start"
          },
          width: "100%"
        }}
      >
        <Hidden smDown>
          <Typography variant="h5" component="h1" my={2} fontWeight={400} fontSize={18} >Movie app</Typography>
        </Hidden>
        <Box sx={{
          py: {
            xs: "0px",
            ls: "16px"
          },
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column"
          },
          gap: 4

        }
        }>
          {navLinks.map((item) => (
            <Link key={item.name} to={item.link} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none"
                }}
              >
                <img src={item.icon} alt={item.name}
                  style={{
                    width: "18px",
                    filter: `${pathname === item.link ?
                      " invert(58%) sepia(14) saturate(3166) hue-rotate(215) brightness()"
                      :
                      "invert(84%)"
                      }`
                  }}
                />
                <Hidden mdDown>
                  <Typography> {item.name}</Typography>
                </Hidden>
              </Box>
            </Link>

          ))
          }

        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

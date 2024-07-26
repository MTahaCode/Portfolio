import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    height: "55px",
    overflow: "hidden",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  const contactList = [
    {
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/in/m-taha-makhdoom-2273111a8",
    },
  ]

  const handleLinkClick = (url_string) => {
    window.open(url_string, '_blank', 'noopener,noreferrer');
  }

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      {
        contactList.length > 0 ? (
          contactList.map((listItem) => 
            <BottomNavigationAction 
              icon={listItem.icon} 
              className={classes.root}  
              onClick={() => handleLinkClick(listItem.link)}
            />
          )
        ) : (
          ""
        )
      }
    </BottomNavigation>
  );
};
export default Footer;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import mern_img from "../images/mern-stack.jpg";
import react_img from "../images/react.png";
import flask_react_img from "../images/flask_react.png";
import django_img from "../images/django.png";
import springboot_react_img from "../images/springboot_react.png";
// import project3 from "../images/javascript-fullstack.jpg";
// import project4 from "";
// import project5 from "../images/react-redux.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    background: "#212121",
    color: "white",
  },
}));

const projects = [
  {
    name: "AI Email Template Generation",
    description: `Developed an AI-powered Email Template Generation tool 
      using React, Flask, Gemini, AWS, and Azure for Aim Lab, enabling the 
      creation of dynamic and personalized email templates efficiently.`,
    image: flask_react_img,
    links: [
      {
        buttonName: "Demo",
        link: "https://email-template-project.vercel.app/",
      },
      {
        buttonName: "Github",
        link: "https://github.com/MTahaCode/EmailTemplateProject",
      }
    ]
  },
  {
    name: "Inventory Management System",
    description: `Developed an Inventory Management System during an internship 
      at Eziline Software House using the MERN stack, facilitating efficient 
      tracking and management of stock levels, orders, and deliveries.`,
    image: mern_img,
    links: [
      {
        buttonName: "Demo",
        link: "https://inventory-management-project-kappa.vercel.app/",
      },
      {
        buttonName: "Github",
        link: "https://github.com/MTahaCode/inventory_management_project",
      }
    ]
  },
  {
    name: "Learning Management System",
    description: `Built a comprehensive Learning Management System with Spring Boot 
      and React, offering features like course management, user authentication, 
      and progress tracking to enhance educational experiences.`,
    image: springboot_react_img,
    links: [
      {
        buttonName: "Github",
        link: "https://github.com/MTahaCode/learning_management_system",
      }
    ]
  },
  {
    name: "Ecommerce Website",
    description: `Created a responsive Ecommerce Website using React, providing 
      a seamless shopping experience with product listings, shopping 
      cart functionality, and secure checkout processes.`,
    image: react_img,
    links: [
      {
        buttonName: "Github",
        link: "https://github.com/MTahaCode/React-Ecommerce-Website",
      }
    ]
  },
  {
    name: "Classroom Management System",
    description: `Designed a Classroom Management System with Django, 
      streamlining administrative tasks, student management, and class 
        scheduling to improve classroom efficiency and organization.`,
    image: django_img,
    links: [
      {
        buttonName: "Github",
        link: "https://github.com/MTahaCode/CMS",
      }
    ]
  },
];

const Portfolio = () => {
  const classes = useStyles();

  const handleLinkClick = (url_string) => {
    window.open(url_string, '_blank', 'noopener,noreferrer');
  }

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                { project.links ? 
                  (project.links.map((linkObj) => {
                    return (
                      <Button size="small" color="primary" onClick={() => handleLinkClick(linkObj.link)}>
                        {linkObj.buttonName}
                      </Button>
                    )
                  })) : (
                    ""
                  )
                }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;

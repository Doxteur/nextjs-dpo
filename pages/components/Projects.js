import React, { use, useEffect } from "react";
import { Box } from "../Box";
import { Button, Container } from "@nextui-org/react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [filter, setFilter] = React.useState("all");
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
      type: "web",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
      type: "mobile",
    },
    {
      title: "Cherry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
      type: "web",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
      type: "mobile",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
      type: "web",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
      type: "mobile",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];
  useEffect(() => {
    setFilter("all");   
    }, []);
    
  return (
    <Container md>
      <Container fluid>
        <div className="flex justify-around m-4">
          <Button
            auto
            onClick={() => setFilter("all")}
            className="m-2"
            color={filter == "all"?"success":""}
            shadow={filter == "all"??false}
            flat={filter == "all"??false}

            >
            All
          </Button>
          <Button
            auto
            onClick={() => setFilter("web")}
            className="m-2"
            color={filter == "web"?"success":""}
            shadow={filter == "web"??false}
            flat={filter == "web"??false}
            >
            Web
          </Button>
          <Button
            auto
            onClick={() => setFilter("mobile")}
            className="m-2"
            color={filter == "mobile"?"success":""}
            shadow={filter == "mobile"??false}
            flat={filter == "mobile"??false}
            >
            Mobile
          </Button>
        </div>
      </Container>
      <ProjectCard filtered={filter} setFilter={setFilter} list={list}/>
    </Container>
  );
}

export default Projects;

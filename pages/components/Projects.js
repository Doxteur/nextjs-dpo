import React from "react";
import { Box } from "../Box";
import { Button, Container } from "@nextui-org/react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <Container md>
      <Container fluid>
        <div className="flex justify-evenly">
          <Button>All</Button>
          <Button>Web</Button>
          <Button>App</Button>
        </div>
      </Container>
      <ProjectCard />
    </Container>
  );
}

export default Projects;

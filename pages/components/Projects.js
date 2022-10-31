import React, { use, useEffect } from "react";
import { Box } from "../Box";
import { Button, Container } from "@nextui-org/react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";
import { Link, Text } from "@nextui-org/react";

function Projects() {
  const [filter, setFilter] = React.useState("all");
  useEffect(() => {
    setFilter("all");
  }, []);

  return (
    <anchor id="projects">
      <Text h2 className="mt-6">
        My Projects
      </Text>
      <Container fluid>
        <div className="flex justify-around m-4">
          <Button
            auto
            onClick={() => setFilter("all")}
            className="m-2"
            color={filter == "all" ? "success" : ""}
            shadow={filter == "all" ?? false}
            flat={filter == "all" ?? false}
          >
            All
          </Button>
          <Button
            auto
            onClick={() => setFilter("web")}
            className="m-2"
            color={filter == "web" ? "success" : ""}
            shadow={filter == "web" ?? false}
            flat={filter == "web" ?? false}
          >
            Web
          </Button>
          <Button
            auto
            onClick={() => setFilter("mobile")}
            className="m-2"
            color={filter == "mobile" ? "success" : ""}
            shadow={filter == "mobile" ?? false}
            flat={filter == "mobile" ?? false}
          >
            Mobile
          </Button>
        </div>
      </Container>
      <ProjectCard filtered={filter} setFilter={setFilter} list={projects} />
    </anchor>
  );
}

export default Projects;

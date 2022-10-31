/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Text, Spacer, Container } from "@nextui-org/react";
import { Box } from "./Box.js";
import Projects from "./components/Projects.js";
import { Link } from "@nextui-org/react";
import MyInfo from "./components/MyInfo.js";

export default function Content() {
  return (
    <Box>
      <Container lg >
        <MyInfo />
        <Projects />
      </Container>
    </Box>
  );
}

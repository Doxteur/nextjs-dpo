
import React, { useEffect } from "react";
import { Layout } from "./Layout.js";
import NavBar from "./components/NavBar.js";
import Content from "./Content.js";

export default function Home() {
 
  return (
    <Layout>
      <NavBar />
      <Content />
    </Layout>
  );
}

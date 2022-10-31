
import React, { useEffect } from "react";
import { Layout } from "./Layout.js";
import NavBar from "./components/NavBar.js";
import Content from "./Content.js";

export default function Home() {
  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");

  useEffect(() => {
    setActiveColor("success");
    setVariant("highlight");
  }, []);

  return (
    <Layout>
      <NavBar activeColor={activeColor} variant={variant}/>
      <Content />
    </Layout>
  );
}

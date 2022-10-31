import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/vercel.svg'
import { Navbar, Button, Link, Text, Card, Spacer, Radio, useTheme } from "@nextui-org/react";
import React, { useEffect } from 'react';
import { Layout } from "./Layout.js";

export default function Home() {
  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");


  const variants = [
    "default",
    "highlight",
    "highlight-solid",
    "underline",
    "highlight-rounded",
    "highlight-solid-rounded",
    "underline-rounded",
  ];

  const colors = ["primary", "secondary", "success", "warning", "error"];

  useEffect(() => {
    setActiveColor("success");
    setVariant("highlight");

  }, []);

  return (
    <Layout>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Jimmy Doussain
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link isActive href="#">Projects</Navbar.Link>
          <Navbar.Link href="#">CV</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content activeColor={"success"}>
          {/* Contact */}
          <Navbar.Link href="#" isActive variant={"highlight"}>Contact Me</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  )
}

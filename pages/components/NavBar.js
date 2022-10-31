import React,{useEffect} from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Spacer,
  Radio,
  useTheme,
  Popover,
  Dropdown,
} from "@nextui-org/react";
import { GoMail } from "react-icons/go";
import {AiFillLinkedin} from "react-icons/ai";
import {FaGithub} from "react-icons/fa";

function NavBar() {
  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");

  useEffect(() => {
    setActiveColor("success");
    setVariant("highlight");
  }, []);

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          Jimmy Doussain
        </Text>
      </Navbar.Brand>
      <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
        <Navbar.Link isActive href="#">Home</Navbar.Link>
        <Navbar.Link href="#projects">
          Projects
        </Navbar.Link>
        <Navbar.Link href="#">CV</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content activeColor={"success"}>
        {/* Contact */}
        <Dropdown>
          <Dropdown.Button flat color={"success"}>Contact Me</Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item key="mail" ><a href="https://google.fr">Jimmydoussain@gmail.com</a></Dropdown.Item>
            <Dropdown.Item key="Linkedin" command="Linkedin"><a href="https://google.fr">Jimmy-Doussain</a></Dropdown.Item>
            <Dropdown.Item key="Github" command="Github" ><a href="https://google.fr">Doxteur</a></Dropdown.Item>
            <Dropdown.Item key="delete" withDivider color="error">
              Fermer
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  );
}

export default NavBar;

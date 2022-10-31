import React from "react";
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

function NavBar({ activeColor, variant }) {
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          Jimmy Doussain
        </Text>
      </Navbar.Brand>
      <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link isActive href="#">
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
            <Dropdown.Item key="mail" >Jimmydoussain@gmail.com</Dropdown.Item>
            <Dropdown.Item key="Linkedin" command="Linkedin">Jimmy-Doussain</Dropdown.Item>
            <Dropdown.Item key="Github" command="Github">Doxteur</Dropdown.Item>
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

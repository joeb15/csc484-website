import React from 'react';
import './App.css';
import {Container, Nav, Navbar, ProgressBar} from "react-bootstrap";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import ColorBlind from "./pages/ColorBlind";
import FontSize from "./pages/FontSize";
import TouchAccuracy from "./pages/TouchAccuracy";
import Contrast from "./pages/Contrast";
import LightDarkMode from "./pages/LightDarkMode";

function App() {
  return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
          <Navbar.Brand href="#home">484 Prototype</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#1">Color Blind</Nav.Link>
              <Nav.Link href="#2">Font Size</Nav.Link>
              <Nav.Link href="#3">Touch Accuracy</Nav.Link>
              <Nav.Link href="#4">Contrast</Nav.Link>
              <Nav.Link href="#5">Light/Dark Mode</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <HashRouter>
          <Switch>
            <Route path="/1">
              <ProgressBar animated striped now={20} label={"20%"} variant="success"/>
              <Container fluid className={"bg-light flex-fill"}>
                <ColorBlind/>
              </Container>
            </Route>
            <Route path="/2">
              <ProgressBar animated striped now={20} label={"20%"} variant="success"/>
              <Container fluid className={"bg-light flex-fill"}>
                <FontSize/>
              </Container>
            </Route>
            <Route path="/3">
              <ProgressBar animated striped now={40} label={"40%"} variant="success"/>
              <Container fluid className={"bg-light flex-fill"}>
                <TouchAccuracy/>
              </Container>
            </Route>
            <Route path="/4">
              <ProgressBar animated striped now={60} label={"60%"} variant="success"/>
              <Container fluid className={"bg-light flex-fill"}>
                <Contrast/>
              </Container>
            </Route>
            <Route path="/5">
              <ProgressBar animated striped now={80} label={"80%"} variant="success"/>
              <Container fluid className={"bg-light flex-fill"}>
                <LightDarkMode/>
              </Container>
            </Route>
            <Route path="/">
              <Redirect to={"/1"}/>
            </Route>
          </Switch>
        </HashRouter>
      </>
  );
}

export default App;

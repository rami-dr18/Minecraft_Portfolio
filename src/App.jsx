import React from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { Navbar, Welcome, Dock } from "#components";
import {
  Terminal,
  Browser,
  Resume,
  Finder,
  Text,
  Image,
  Contact,
} from "#windows";
gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Browser />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  );
};

export default App;

"use client";
import { useEffect } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Apresentation from "./components/Apresentation/Apresentation";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/ProjectsComponent/Projects";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import AOS from "aos";
import "aos/dist/aos.css";
import CanvasCursor from "@/components/custom/CanvasCursor/canvas-cursor";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <main>
      <Header />
      <Apresentation />
      <Projects />
      <Skills />
      <Works />
      <AboutMe />
      <Footer />
      <CanvasCursor />
    </main>
  );
}

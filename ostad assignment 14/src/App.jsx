import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function App() {
  return (
    <div>
      <Header title="Text Viewer" />
      <Content />
      <Footer />
    </div>
  );
}

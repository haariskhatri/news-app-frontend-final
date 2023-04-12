import React from "react";

import Header from "../components/header";
import News from "../components/card";
import Features from "../components/features";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <News/>
      <Features/>
      <Footer/>
    </>
  );
}

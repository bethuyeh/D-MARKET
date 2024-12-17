import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ImageCarousel from "./ImageCarousel";
import Style from "./Style";
import Footer from "./Footer";
import Technique from "./Technique";

function Home() {
    return(
        <div>
           <Navbar />
           <Hero />
           <ImageCarousel />
           <Style />
           <Technique />
           <Footer />
        </div>
    )
}

export default Home
import React from "react";
import { Header } from "./components/Header/Header";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { MyWorks } from "./components/MyWorks/MyWorks";
import { MoreAbout } from "./components/MoreAbout/MoreAbout";
import { Footer } from "./components/Footer/Footer";
import { ButtonWpp } from "./components/ButtonWpp/ButtonWpp";

function App() {
    return (
        <>
            <ButtonWpp />
            <Header />
            <AboutMe />
            <MyWorks />
            <MoreAbout />
            <Footer />
        </>
    );
}

export default App;

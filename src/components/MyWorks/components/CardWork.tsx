import React, { useEffect } from "react";
import { Container, Content } from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";

interface CardWorkProps {
    imageUrl: string;
}

export function CardWork({ imageUrl }: CardWorkProps) {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <Container
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"    
        >
            <Content imageUrl={imageUrl} />
        </Container>
    );
}

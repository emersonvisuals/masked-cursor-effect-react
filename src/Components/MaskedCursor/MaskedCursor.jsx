import React, { useEffect, useState } from "react";
import "./maskedcursor.css";
import { motion } from "framer-motion";

const MaskedCursor = () => {
    // define cursor coordinates
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // define if mouse is hovered on element
    const [isHovered, setIsHovered] = useState(false);

    // define location of mouse
    useEffect(() => {
        const setFromEvent = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    const size = isHovered ? "450" : "30";

    return (
        <div className="container">
            <motion.div
                className="mask"
                animate={{
                    WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
                        mousePosition.y - size / 2
                    }px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ ease: "backOut", duration: 0.4 }}
            >
                <h1
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    not <br /> found
                </h1>
            </motion.div>
            <div className="normal">
                <h1>
                    404 <br /> page
                </h1>
            </div>
        </div>
    );
};

export default MaskedCursor;

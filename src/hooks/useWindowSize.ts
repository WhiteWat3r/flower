import {useEffect, useState} from "react";

// Возвращает размеры окна
export const useWindowSize = () : [windowWidth: number, windowHeight: number] => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const setSize = () => {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        }

        window.addEventListener('resize', setSize)

        return () => {
            window.removeEventListener('resize', setSize)
        };
    }, []);

    return [
        windowWidth,
        windowHeight
    ]
} // определение текущего размера экрана

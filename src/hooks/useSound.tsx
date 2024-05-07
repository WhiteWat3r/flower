import { useState } from 'react';
import { useAppSelector } from '../store/store';

export const useSound = (soundUrl: string) => {
    const [audio] = useState(new Audio(soundUrl));
    const isSoundOn = useAppSelector((store) => store.main.isSoundOn);

    const playSound = () => {
        if (isSoundOn) {
            audio.play();
        }
    };

    return [playSound];
};

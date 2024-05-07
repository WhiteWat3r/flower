import { useEffect, useRef } from 'react';
import { useAppSelector } from '../store/store';

import defaultMusic from '../assets/music/floating-cat-michael-grubb-main-version-24551-01-53.mp3';

export const Sound = () => {
  const isSoundOn = useAppSelector((store) => store.main.isSoundOn);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (!isSoundOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  }, [defaultMusic, isSoundOn]);

  return (
    <>
      <audio ref={audioRef} loop key={defaultMusic}>
        <source src={defaultMusic} type="audio/mpeg" />
      </audio>
    </>
  );
};

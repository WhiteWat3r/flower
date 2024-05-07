import { useWindowSize } from '../hooks/useWindowSize';
import { useGetCurrentBreakpoint } from '../hooks/useGetCurrentBreakpoint';
import { ReactNode } from 'react';
import Header from './Header';
import {Sound} from "./Sound.tsx";

export const MobileContainer = ({children}: {children: ReactNode}) => {
  const [, windowHeight] = useWindowSize();
  const { currentBreakpointName } = useGetCurrentBreakpoint();

  return (
    <div
      id={'container'}
      style={{
        transform:
          currentBreakpointName === 'desktop' ? `scale(${1 - 643 / windowHeight + 1})` : '',
      }}
      className={`relative w-full desktop:h-[643px] desktop:w-[375px] rounded-none overflow-hidden desktop:rounded-2xl desktop:shadow-2xl object-cover bg-cover bg-center h-full`}>
        <Header />
        <Sound />
        {children}
    </div>
  );
};

import { useWindowSize } from '../hooks/useWindowSize';
import { useGetCurrentBreakpoint } from '../hooks/useGetCurrentBreakpoint';
import { ReactNode } from 'react';

export const MobileContainer = ({children}: {children: ReactNode}) => {
  const [, windowHeight] = useWindowSize();
  const { currentBreakpointName } = useGetCurrentBreakpoint();

  return (
    <div
      id={'container'}
      // style={{
      //   transform:
      //     currentBreakpointName === 'desktop' ? `scale(${1 - 625 / windowHeight + 1})` : '',
      // }}
      className={`relative w-full  rounded-none overflow-hidden desktop:rounded-2xl desktop:shadow-2xl object-cover bg-cover bg-center h-full`}>
        {children}
    </div>
  );
};

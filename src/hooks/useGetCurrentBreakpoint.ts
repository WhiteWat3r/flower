import resolveConfig from 'tailwindcss/resolveConfig';
const fullConfig = resolveConfig(tailwindConfig);
import tailwindConfig from '../../tailwind.config';
const screens = fullConfig.theme.screens;

// Находит текущий breakpoint из экранов Tailwind и возвращает его вместе с его значением, если находит подходящий
export const useGetCurrentBreakpoint = (): {
  currentBreakpointName: keyof typeof screens | string;
  currentBreakpointValue: number;
} => {
  let currentBreakpoint = '';
  let biggestBreakpointValue = 0;

  for (const breakpoint of Object.keys(screens)) {
    const breakpointValue = parseInt(screens[breakpoint as keyof typeof screens]);

    if (breakpointValue > biggestBreakpointValue && window.innerWidth >= breakpointValue) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint as keyof typeof screens;
    }
  }

  return {
    currentBreakpointName: currentBreakpoint,
    currentBreakpointValue: biggestBreakpointValue,
  };
};

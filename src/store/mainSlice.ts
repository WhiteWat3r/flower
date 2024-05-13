import { createSlice } from '@reduxjs/toolkit';

interface IGameState {
  profile: {
    type: number;
    id: number;
    uuid: string;
    modules: [];
    email: string;
    add_date: string;
  };
  flower: {
    id: number;
    name: string;
    seed: number;
    add_date: string;
    start_day: number;
    day_number: number;
  };
  // selectedSeedId: number;
  // currentDay: number;
  isBackgroundMusicPaused: boolean;
  isSoundOn: boolean;
  isFirstClick: boolean;
  onBoardingStep: number;
}

const mainState: IGameState = {
  flower: {
    id: 0,
    name: '',
    seed: 0,
    add_date: '',
    start_day: 0,
    day_number: 0,
  },
  profile: {
    type: 0,
    id: 0,
    uuid: '',
    modules: [],
    email: '',
    add_date: '',
  },
  // selectedSeedId: 0,
  // currentDay: 1,

  isSoundOn: false,
  isFirstClick: true,
  isBackgroundMusicPaused: false,
  onBoardingStep: 0,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState: mainState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setBackgorindMusicPaused: (state, action) => {
      state.isBackgroundMusicPaused = action.payload;
    },
    setFlower: (state, action) => {
      const seedMap: { [key: string]: number } = {
        white: 1,
        red: 2,
        yellow: 0,
      };
      state.flower = {
        ...action.payload,
        seed:
          seedMap[action.payload?.seed] !== undefined
            ? seedMap[action.payload?.seed]
            : action.payload?.seed,
      };
    },
    setIsSoundOn: (state) => {
      state.isSoundOn = !state.isSoundOn;
    },
    setIsFirstClick: (state, action) => {
      state.isFirstClick = action.payload;
    },
    onBoardingStep: (state, action) => {
      state.onBoardingStep = action.payload;
    },
  },
});

export const {
  setIsSoundOn,
  setProfile,
  setIsFirstClick,
  setFlower,
  setBackgorindMusicPaused,
  onBoardingStep,
} = mainSlice.actions;

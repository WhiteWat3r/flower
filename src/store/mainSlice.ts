import { createSlice } from '@reduxjs/toolkit';

interface IGameState {
  profile: {
    type: number;
    id: number;
    uuid: string;
    modules: [],
    email: string;
    add_date: string
};
flower: {
  id: number,
  name: string,
  seed: number,
  add_date: string,
  start_day: number,
  day_number: number
}
  // selectedSeedId: number;
  // currentDay: number;
  isFirstActionPressed: boolean;
  isSecondActionPressed: boolean;
  isThirdActionPressed: boolean;
  isSoundOn: boolean;
  isFirstClick: boolean;
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
    add_date: ''
},
  // selectedSeedId: 0,
  // currentDay: 1,
  isFirstActionPressed: false,
  isSecondActionPressed: false,
  isThirdActionPressed: false,
  isSoundOn: false,
  isFirstClick: true
};

export const mainSlice = createSlice({
  name: 'main',
  initialState: mainState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setFlower: (state, action) => {
      const seedMap: { [key: string]: number } = {
        white: 1,
        red: 2,
        yellow: 0,
      };
      state.flower = {
        ...action.payload,
        seed: seedMap[action.payload?.seed] !== undefined ? seedMap[action.payload?.seed] : action.payload?.seed,
      };
    },
    // setSeedId: (state, action) => {
    //   state.selectedSeedId = action.payload;
    // },
    // setCurrentDay: (state, action) => {
    //   state.currentDay = action.payload;
    // },
    setFirstActionPressed: (state, action) => {
      state.isFirstActionPressed = action.payload;
    },
    setSecondActionPressed: (state, action) => {
      state.isSecondActionPressed = action.payload;
    },
    setThirdActionPressed: (state, action) => {
      state.isThirdActionPressed = action.payload;
    },
    clearActionsStatus: (state) => {
      state.isFirstActionPressed = false;
      state.isSecondActionPressed = false;
      state.isThirdActionPressed = false;
    },
    setIsSoundOn: (state) => {
      state.isSoundOn = !state.isSoundOn;
    },
    setIsFirstClick: (state, action) => {
      state.isFirstClick = action.payload;
    }
  },
});

export const {
  // setSeedId,
  // setCurrentDay,
  setThirdActionPressed,
  setSecondActionPressed,
  setFirstActionPressed,
  clearActionsStatus,
  setIsSoundOn,
  setProfile,
  setIsFirstClick,
  setFlower
} = mainSlice.actions;

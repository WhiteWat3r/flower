import { createSlice } from '@reduxjs/toolkit';

interface IGameState {
  selectedSeedId: number;
  currentDay: number;
  isFirstActionPressed: boolean;
  isSecondActionPressed: boolean;
  isThirdActionPressed: boolean;
  isSoundOn: boolean;
  isFirstClick: boolean;
}

const mainState: IGameState = {
  selectedSeedId: 0,
  currentDay: 1,
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
    setSeedId: (state, action) => {
      state.selectedSeedId = action.payload;
    },
    setCurrentDay: (state, action) => {
      state.currentDay = action.payload;
    },
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
  setSeedId,
  setCurrentDay,
  setThirdActionPressed,
  setSecondActionPressed,
  setFirstActionPressed,
  clearActionsStatus,
  setIsSoundOn,
  setIsFirstClick
} = mainSlice.actions;

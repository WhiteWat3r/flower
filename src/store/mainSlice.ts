import { createSlice } from '@reduxjs/toolkit';

interface IGameState {
    selectedSeedId: number;
    currentDay: number;
}

const mainState: IGameState = {
    selectedSeedId: 0,
    currentDay: 1,
};

export const mainSlice = createSlice({
  name: 'game',
  initialState: mainState,
  reducers: {
    setSeedId: (state, action) => {
      state.selectedSeedId = action.payload;
    },
    setCurrentDay: (state, action) => {
        state.selectedSeedId = action.payload;
      },
  },
});

export const {
    setSeedId,
    setCurrentDay
} = mainSlice.actions;

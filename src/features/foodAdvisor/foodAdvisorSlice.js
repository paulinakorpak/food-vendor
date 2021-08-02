import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  creaturesCount: {
    dwarf: 1,
    hobbit: 1,
    wizard: 1,
  },
  journeyLength: '',
};

export const foodAdvisorSlice = createSlice({
  name: 'foodAdvisor',
  initialState,
  reducers: {
    setCreatureCount: (state, action) => {
      state.creaturesCount[action.payload.creature] = action.payload.count;
    },
    setJourneyLength: (state, action) => {
      state.journeyLength = action.payload;
    },
  },
});

export const { setCreatureCount, setJourneyLength } = foodAdvisorSlice.actions;

export const selectCreatureCount = (state) => state.foodAdvisor.creaturesCount;
export const selectJourneyLength = (state) => state.foodAdvisor.journeyLength;

export default foodAdvisorSlice.reducer;

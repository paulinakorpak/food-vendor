import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  creaturesCount: {
    dwarf: 1,
    hobbit: 1,
    wizard: 1,
  },
};

export const foodAdvisorSlice = createSlice({
  name: 'foodAdvisor',
  initialState,
  reducers: {
    setCreatureCount: (state, action) => {
      state.creaturesCount[action.payload.creature] = action.payload.count;
    },
  },
});

export const { setCreatureCount } = foodAdvisorSlice.actions;

export const selectCreatureCount = (state) => state.foodAdvisor.creaturesCount;

export default foodAdvisorSlice.reducer;

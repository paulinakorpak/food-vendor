import { configureStore } from '@reduxjs/toolkit';
import foodAdvisorReducer from '../features/foodAdvisor/foodAdvisorSlice';

const store = configureStore({
  reducer: {
    foodAdvisor: foodAdvisorReducer,
  },
});

export default store;

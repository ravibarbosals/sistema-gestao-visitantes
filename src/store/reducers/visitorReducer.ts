import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VisitorType } from '../../shared/types/VisitorType';

interface VisitorState {
  visitors: VisitorType[];
  // ... outros estados, ex: totalPages, selectedVisitor
}

const initialState: VisitorState = {
  visitors: [],
};

const visitorSlice = createSlice({
  name: 'visitor',
  initialState,
  reducers: {
    setVisitors: (state, action: PayloadAction<VisitorType[]>) => {
      state.visitors = action.payload;
    },
    // ... outros reducers (addVisitor, removeVisitor, updateVisitor)
  },
});

export const { setVisitors } = visitorSlice.actions;
export default visitorSlice.reducer;
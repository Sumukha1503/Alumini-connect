import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { College, TenantState } from '../types';

const initialState: TenantState = {
    currentCollege: null,
    colleges: [],
    loading: false,
};

const tenantSlice = createSlice({
    name: 'tenant',
    initialState,
    reducers: {
        setCurrentCollege: (state, action: PayloadAction<College | null>) => {
            state.currentCollege = action.payload;
        },
        setColleges: (state, action: PayloadAction<College[]>) => {
            state.colleges = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { setCurrentCollege, setColleges, setLoading } = tenantSlice.actions;
export default tenantSlice.reducer;

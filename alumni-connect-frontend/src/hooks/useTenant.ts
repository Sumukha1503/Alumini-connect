import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export const useTenant = () => {
    const { currentCollege, colleges, loading } = useSelector((state: RootState) => state.tenant);

    return {
        currentCollege,
        colleges,
        loading,
    };
};

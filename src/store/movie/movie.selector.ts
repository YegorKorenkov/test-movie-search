import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const baseState = (state: RootState) => state.movie;

export const selectMovie = createDraftSafeSelector(baseState, (state) => state.movie);
export const selectError = createDraftSafeSelector(baseState, (state) => state.error);
export const selectIsLoading = createDraftSafeSelector(baseState, (state) => state.isLoading);

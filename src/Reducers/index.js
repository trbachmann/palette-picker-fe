import React from 'react';
import { combineReducers } from 'redux';
import currentPaletteReducer from './CurrentPaletteReducer';
import errorReducer from './ErrorReducer';
import loadingReducer from './LoadingReducer';
import projectsReducer from './ProjectsReducer';

export const rootReducer = combineReducers({
  currentPalette: currentPaletteReducer(),
  error: errorReducer(),
  isLoading: loadingReducer(),
  projects: projectsReducer()
});
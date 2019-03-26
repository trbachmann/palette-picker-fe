import React from 'react';
import { combineReducers } from 'redux';
import { currentPaletteReducer } from './CurrentPaletteReducer';
import { errorReducer } from './ErrorReducer';
import { loadingReducer } from './LoadingReducer';
import { projectsReducer } from './ProjectsReducer';
import { currentExpandedProjectReducer } from './CurrentExpandedProjectReducer';

export const rootReducer = combineReducers({
  currentPalette: currentPaletteReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  projects: projectsReducer,
  currentExpandedProject: currentExpandedProjectReducer
});
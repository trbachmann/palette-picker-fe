import React from 'react';
import { combineReducers } from 'redux';
import { currentPaletteReducer } from './CurrentPaletteReducer';
import { errorReducer } from './ErrorReducer';
import { loadingReducer } from './LoadingReducer';
import { projectsReducer } from './ProjectsReducer';
import { currentExpandedProjectReducer } from './CurrentExpandedProjectReducer';
import { paletteInEditReducer } from './paletteInEditReducer';

export const rootReducer = combineReducers({
  currentPalette: currentPaletteReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  projects: projectsReducer,
  currentExpandedProject: currentExpandedProjectReducer,
  paletteInEdit: paletteInEditReducer
});
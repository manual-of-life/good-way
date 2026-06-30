/**
 * Immutable State Management
 * 
 * All application state is immutable.
 * State updates create new state objects.
 * 
 * @module core/state
 */

import { EventTypes } from './events.js';

/**
 * Initial application state
 */
export const initialState = Object.freeze({
  // Navigation state
  navigation: Object.freeze({
    currentRoute: 'dwelling',
    history: [],
    params: {},
    query: {}
  }),
  
  // Content state
  content: Object.freeze({
    nodes: {},
    relationships: {},
    currentNodeId: null,
    loading: false,
    error: null
  }),
  
  // User state
  user: Object.freeze({
    profile: null,
    isAuthenticated: false,
    identityProviders: [],
    friends: [],
    presence: 'offline'
  }),
  
  // Fellowship state
  fellowship: Object.freeze({
    rooms: [],
    activeRoom: null,
    messages: {},
    participants: {}
  }),
  
  // Knowledge state
  knowledge: Object.freeze({
    connections: [],
    exploredNodes: [],
    bookmarks: [],
    notes: {},
    highlights: {}
  }),
  
  // UI state
  ui: Object.freeze({
    theme: 'light',
    fontSize: 'medium',
    sidebarOpen: true,
    modals: [],
    notifications: []
  }),
  
  // Sync state
  sync: Object.freeze({
    status: 'idle',
    lastSync: null,
    pendingChanges: [],
    conflicts: []
  })
});

/**
 * Deep freeze an object recursively
 * 
 * @param {Object} obj - Object to freeze
 * @returns {Object} Frozen object
 */
export const deepFreeze = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      deepFreeze(obj[prop]);
    }
  });
  
  return Object.freeze(obj);
};

/**
 * Create a new state object with immutability guarantees
 * 
 * @param {Object} currentState - Current state
 * @param {Object} updates - Updates to apply
 * @returns {Object} New frozen state object
 */
export const createState = (currentState, updates = {}) => {
  const newState = {
    ...currentState,
    ...updates
  };
  
  return deepFreeze(newState);
};

/**
 * Update a nested path in state immutably
 * 
 * @param {Object} state - Current state
 * @param {string} path - Dot-separated path (e.g., 'content.nodes')
 * @param {any} value - New value
 * @returns {Object} New state object
 */
export const updatePath = (state, path, value) => {
  const keys = path.split('.');
  const [first, ...rest] = keys;
  
  if (rest.length === 0) {
    return createState(state, { [first]: value });
  }
  
  return createState(state, {
    [first]: updatePath(state[first], rest.join('.'), value)
  });
};

/**
 * Get a value at a nested path in state
 * 
 * @param {Object} state - Current state
 * @param {string} path - Dot-separated path
 * @param {any} defaultValue - Default value if path doesn't exist
 * @returns {any} Value at path or default
 */
export const getPath = (state, path, defaultValue) => {
  const keys = path.split('.');
  let value = state;
  
  for (const key of keys) {
    if (value === null || value === undefined || !(key in value)) {
      return defaultValue;
    }
    value = value[key];
  }
  
  return value;
};

/**
 * Create a selector function that extracts data from state
 * 
 * @param {Function} selectorFn - Function that takes state and returns derived value
 * @returns {Function} Memoized selector
 */
export const createSelector = (selectorFn) => {
  let lastState = null;
  let lastResult = null;
  
  return (state) => {
    if (state !== lastState) {
      lastState = state;
      lastResult = selectorFn(state);
    }
    return lastResult;
  };
};

// Common selectors
export const selectors = Object.freeze({
  getCurrentRoute: createSelector(state => state.navigation.currentRoute),
  getCurrentNode: createSelector(state => 
    state.content.currentNodeId 
      ? state.content.nodes[state.content.currentNodeId] 
      : null
  ),
  isLoading: createSelector(state => state.content.loading),
  getError: createSelector(state => state.content.error),
  isAuthenticated: createSelector(state => state.user.isAuthenticated),
  getUserProfile: createSelector(state => state.user.profile),
  getBookmarks: createSelector(state => state.knowledge.bookmarks),
  getTheme: createSelector(state => state.ui.theme),
  getNotifications: createSelector(state => state.ui.notifications)
});

/**
 * Reset state to initial (useful for testing or logout)
 * 
 * @returns {Object} Initial frozen state
 */
export const resetState = () => initialState;

/**
 * Merge partial state updates
 * 
 * @param {Object} state - Current state
 * @param {Object} partial - Partial state to merge
 * @returns {Object} New merged state
 */
export const mergeState = (state, partial) => {
  const merge = (target, source) => {
    if (source === null || source === undefined) {
      return target;
    }
    
    if (typeof source !== 'object') {
      return source;
    }
    
    if (Array.isArray(source)) {
      return [...source];
    }
    
    const result = { ...target };
    
    Object.keys(source).forEach(key => {
      if (key in target) {
        result[key] = merge(target[key], source[key]);
      } else {
        result[key] = deepFreeze(source[key]);
      }
    });
    
    return result;
  };
  
  return deepFreeze(merge(state, partial));
};

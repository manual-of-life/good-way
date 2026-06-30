/**
 * Pure Reducer Functions
 * 
 * Reducers are pure functions that transform state based on events.
 * No side effects, no mutations, no external dependencies.
 * 
 * @module core/reducers
 */

import { EventTypes } from './events.js';
import { createState, updatePath, mergeState } from './state.js';

/**
 * Navigation reducer
 */
export const navigationReducer = (state, event) => {
  switch (event.type) {
    case EventTypes.NAVIGATION.NAVIGATE: {
      const { route, params = {} } = event.payload;
      return createState(state, {
        currentRoute: route,
        params,
        history: [...state.history, state.currentRoute]
      });
    }
    
    case EventTypes.NAVIGATION.BACK: {
      if (state.history.length === 0) {
        return state;
      }
      
      const previousRoute = state.history[state.history.length - 1];
      const newHistory = state.history.slice(0, -1);
      
      return createState(state, {
        currentRoute: previousRoute,
        history: newHistory
      });
    }
    
    case EventTypes.NAVIGATION.FORWARD: {
      // Implementation would need a forward stack
      return state;
    }
    
    default:
      return state;
  }
};

/**
 * Content reducer
 */
export const contentReducer = (state, event) => {
  switch (event.type) {
    case EventTypes.CONTENT.NODE_REQUESTED: {
      return createState(state, {
        loading: true,
        error: null
      });
    }
    
    case EventTypes.CONTENT.NODE_LOADED: {
      const { nodeId, node, relationships } = event.payload;
      
      return createState(state, {
        nodes: {
          ...state.nodes,
          [nodeId]: node
        },
        relationships: {
          ...state.relationships,
          [nodeId]: relationships || []
        },
        currentNodeId: nodeId,
        loading: false,
        error: null
      });
    }
    
    case EventTypes.CONTENT.NODE_ERROR: {
      const { error } = event.payload;
      
      return createState(state, {
        loading: false,
        error
      });
    }
    
    case EventTypes.CONTENT.RELATIONSHIPS_LOADED: {
      const { nodeId, relationships } = event.payload;
      
      return createState(state, {
        relationships: {
          ...state.relationships,
          [nodeId]: relationships
        }
      });
    }
    
    default:
      return state;
  }
};

/**
 * User reducer
 */
export const userReducer = (state, event) => {
  switch (event.type) {
    case EventTypes.USER.LOGIN_SUCCESS: {
      const { user } = event.payload;
      
      return createState(state, {
        profile: user.profile,
        isAuthenticated: true,
        identityProviders: user.providers || []
      });
    }
    
    case EventTypes.USER.LOGOUT: {
      return createState(state, {
        profile: null,
        isAuthenticated: false,
        identityProviders: [],
        friends: [],
        presence: 'offline'
      });
    }
    
    case EventTypes.USER.PROFILE_UPDATED: {
      const { profile } = event.payload;
      
      return createState(state, {
        profile: mergeState(state.profile, profile)
      });
    }
    
    default:
      return state;
  }
};

/**
 * Fellowship reducer
 */
export const fellowshipReducer = (state, event) => {
  switch (event.type) {
    case EventTypes.FELLOWSHIP.ROOM_JOINED: {
      const { roomId } = event.payload;
      
      return createState(state, {
        activeRoom: roomId
      });
    }
    
    case EventTypes.FELLOWSHIP.ROOM_LEFT: {
      return createState(state, {
        activeRoom: null
      });
    }
    
    case EventTypes.FELLOWSHIP.MESSAGE_RECEIVED: {
      const { roomId, message } = event.payload;
      
      return createState(state, {
        messages: {
          ...state.messages,
          [roomId]: [
            ...(state.messages[roomId] || []),
            message
          ]
        }
      });
    }
    
    case EventTypes.FELLOWSHIP.PARTICIPANT_JOINED: {
      const { roomId, participant } = event.payload;
      
      return createState(state, {
        participants: {
          ...state.participants,
          [roomId]: [
            ...(state.participants[roomId] || []),
            participant
          ]
        }
      });
    }
    
    default:
      return state;
  }
};

/**
 * Knowledge reducer
 */
export const knowledgeReducer = (state, event) => {
  switch (event.type) {
    case EventTypes.KNOWLEDGE.CONNECTION_DISCOVERED: {
      const { connection } = event.payload;
      
      return createState(state, {
        connections: [...state.connections, connection],
        exploredNodes: Array.from(new Set([
          ...state.exploredNodes,
          connection.sourceId,
          connection.targetId
        ]))
      });
    }
    
    case EventTypes.KNOWLEDGE.BOOKMARK_ADDED: {
      const { nodeId, note } = event.payload;
      
      const bookmark = {
        id: `bookmark_${Date.now()}`,
        nodeId,
        note: note || '',
        createdAt: new Date().toISOString()
      };
      
      return createState(state, {
        bookmarks: [...state.bookmarks, bookmark]
      });
    }
    
    default:
      return state;
  }
};

/**
 * UI reducer
 */
export const uiReducer = (state, event) => {
  switch (event.type) {
    case 'UI/TOGGLE_SIDEBAR': {
      return createState(state, {
        sidebarOpen: !state.sidebarOpen
      });
    }
    
    case 'UI/SET_THEME': {
      const { theme } = event.payload;
      return createState(state, { theme });
    }
    
    case 'UI/SET_FONT_SIZE': {
      const { fontSize } = event.payload;
      return createState(state, { fontSize });
    }
    
    case 'UI/ADD_NOTIFICATION': {
      const { notification } = event.payload;
      return createState(state, {
        notifications: [...state.notifications, notification]
      });
    }
    
    case 'UI/REMOVE_NOTIFICATION': {
      const { id } = event.payload;
      return createState(state, {
        notifications: state.notifications.filter(n => n.id !== id)
      });
    }
    
    case 'UI/ADD_MODAL': {
      const { modal } = event.payload;
      return createState(state, {
        modals: [...state.modals, modal]
      });
    }
    
    case 'UI/REMOVE_MODAL': {
      const { id } = event.payload;
      return createState(state, {
        modals: state.modals.filter(m => m.id !== id)
      });
    }
    
    default:
      return state;
  }
};

/**
 * Sync reducer
 */
export const syncReducer = (state, event) => {
  switch (event.type) {
    case EventTypes.SYNC.SYNC_STARTED: {
      return createState(state, {
        status: 'syncing',
        lastSync: null
      });
    }
    
    case EventTypes.SYNC.SYNC_COMPLETED: {
      const { changes } = event.payload;
      
      return createState(state, {
        status: 'idle',
        lastSync: new Date().toISOString(),
        pendingChanges: [],
        conflicts: []
      });
    }
    
    case EventTypes.SYNC.CONFLICT_DETECTED: {
      const { conflict } = event.payload;
      
      return createState(state, {
        conflicts: [...state.conflicts, conflict]
      });
    }
    
    default:
      return state;
  }
};

/**
 * Combined root reducer
 * Applies all domain reducers to produce new state
 * 
 * @param {Object} state - Current state
 * @param {Object} event - Event object
 * @returns {Object} New state
 */
export const rootReducer = (state, event) => {
  return createState(state, {
    navigation: navigationReducer(state.navigation, event),
    content: contentReducer(state.content, event),
    user: userReducer(state.user, event),
    fellowship: fellowshipReducer(state.fellowship, event),
    knowledge: knowledgeReducer(state.knowledge, event),
    ui: uiReducer(state.ui, event),
    sync: syncReducer(state.sync, event)
  });
};

/**
 * Create a reducer with middleware
 * 
 * @param {Function} reducer - Base reducer
 * @param {Array} middlewares - Middleware functions
 * @returns {Function} Enhanced reducer
 */
export const withMiddleware = (reducer, middlewares = []) => {
  return (state, event) => {
    let currentState = state;
    
    // Apply before middleware
    middlewares.forEach(mw => {
      if (mw.before) {
        mw.before(currentState, event);
      }
    });
    
    // Run reducer
    const newState = reducer(currentState, event);
    
    // Apply after middleware
    middlewares.forEach(mw => {
      if (mw.after) {
        mw.after(newState, event);
      }
    });
    
    return newState;
  };
};

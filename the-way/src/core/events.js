/**
 * Event Bus - Functional Event Dispatch System
 * 
 * All application state changes flow through events.
 * Events are pure objects with type and payload.
 * 
 * @module core/events
 */

// Event Types - All domains define their events here
export const EventTypes = Object.freeze({
  // Navigation events
  NAVIGATION: Object.freeze({
    NAVIGATE: 'NAVIGATION/NAVIGATE',
    BACK: 'NAVIGATION/BACK',
    FORWARD: 'NAVIGATION/FORWARD'
  }),
  
  // Content events
  CONTENT: Object.freeze({
    NODE_REQUESTED: 'CONTENT/NODE_REQUESTED',
    NODE_LOADED: 'CONTENT/NODE_LOADED',
    NODE_ERROR: 'CONTENT/NODE_ERROR',
    RELATIONSHIPS_LOADED: 'CONTENT/RELATIONSHIPS_LOADED'
  }),
  
  // User events
  USER: Object.freeze({
    LOGIN_REQUESTED: 'USER/LOGIN_REQUESTED',
    LOGIN_SUCCESS: 'USER/LOGIN_SUCCESS',
    LOGOUT: 'USER/LOGOUT',
    PROFILE_UPDATED: 'USER/PROFILE_UPDATED'
  }),
  
  // Fellowship events
  FELLOWSHIP: Object.freeze({
    ROOM_JOINED: 'FELLOWSHIP/ROOM_JOINED',
    ROOM_LEFT: 'FELLOWSHIP/ROOM_LEFT',
    MESSAGE_RECEIVED: 'FELLOWSHIP/MESSAGE_RECEIVED',
    PARTICIPANT_JOINED: 'FELLOWSHIP/PARTICIPANT_JOINED'
  }),
  
  // Knowledge events
  KNOWLEDGE: Object.freeze({
    CONNECTION_DISCOVERED: 'KNOWLEDGE/CONNECTION_DISCOVERED',
    BOOKMARK_ADDED: 'KNOWLEDGE/BOOKMARK_ADDED',
    NOTE_CREATED: 'KNOWLEDGE/NOTE_CREATED'
  }),
  
  // Sync events
  SYNC: Object.freeze({
    SYNC_STARTED: 'SYNC/SYNC_STARTED',
    SYNC_COMPLETED: 'SYNC/SYNC_COMPLETED',
    CONFLICT_DETECTED: 'SYNC/CONFLICT_DETECTED'
  })
});

// Subscriber list - internal state
let subscribers = [];

/**
 * Create an event object
 * 
 * @param {string} type - Event type (e.g., 'CONTENT/NODE_LOADED')
 * @param {any} payload - Event payload data
 * @returns {Object} Immutable event object
 */
export const createEvent = (type, payload = {}) => 
  Object.freeze({ type, payload });

/**
 * Subscribe to events of a specific type
 * 
 * @param {string} eventType - The event type to subscribe to
 * @param {Function} handler - Function to call when event occurs
 * @returns {Function} Unsubscribe function
 */
export const subscribe = (eventType, handler) => {
  const subscription = { eventType, handler };
  subscribers = [...subscribers, subscription];
  
  // Return unsubscribe function
  return () => {
    subscribers = subscribers.filter(s => s !== subscription);
  };
};

/**
 * Dispatch an event to all subscribers
 * 
 * @param {Object} event - The event to dispatch
 */
export const dispatch = (event) => {
  // Validate event structure
  if (!event || !event.type) {
    console.error('Invalid event: must have a type property');
    return;
  }
  
  // Freeze the event to prevent mutation
  const frozenEvent = Object.freeze({
    ...event,
    timestamp: Date.now()
  });
  
  // Notify all matching subscribers
  subscribers.forEach(({ eventType, handler }) => {
    if (eventType === frozenEvent.type) {
      try {
        handler(frozenEvent);
      } catch (error) {
        console.error(`Error in event handler for ${frozenEvent.type}:`, error);
      }
    }
  });
  
  // Log in development
  if (window.__DEV__) {
    console.log('[EVENT]', frozenEvent.type, frozenEvent.payload);
  }
};

/**
 * Create an action creator function
 * 
 * @param {string} type - Event type
 * @param {Function} payloadCreator - Function to create payload from arguments
 * @returns {Function} Action creator function
 */
export const createAction = (type, payloadCreator = (x) => x) => 
  (...args) => {
    const payload = payloadCreator(...args);
    return createEvent(type, payload);
  };

// Pre-built action creators for common events
export const actions = Object.freeze({
  navigate: createAction(EventTypes.NAVIGATION.NAVIGATE, (route, params = {}) => ({ route, params })),
  goBack: createAction(EventTypes.NAVIGATION.BACK),
  goForward: createAction(EventTypes.NAVIGATION.FORWARD),
  
  requestNode: createAction(EventTypes.CONTENT.NODE_REQUESTED, (nodeId) => ({ nodeId })),
  nodeLoaded: createAction(EventTypes.CONTENT.NODE_LOADED, (nodeId, node, relationships) => ({ nodeId, node, relationships })),
  nodeError: createAction(EventTypes.CONTENT.NODE_ERROR, (nodeId, error) => ({ nodeId, error })),
  
  loginRequested: createAction(EventTypes.USER.LOGIN_REQUESTED, (provider) => ({ provider })),
  loginSuccess: createAction(EventTypes.USER.LOGIN_SUCCESS, (user) => ({ user })),
  logout: createAction(EventTypes.USER.LOGOUT),
  
  joinRoom: createAction(EventTypes.FELLOWSHIP.ROOM_JOINED, (roomId) => ({ roomId })),
  leaveRoom: createAction(EventTypes.FELLOWSHIP.ROOM_LEFT, (roomId) => ({ roomId })),
  
  addBookmark: createAction(EventTypes.KNOWLEDGE.BOOKMARK_ADDED, (nodeId, note) => ({ nodeId, note })),
  
  syncStarted: createAction(EventTypes.SYNC.SYNC_STARTED),
  syncCompleted: createAction(EventTypes.SYNC.SYNC_COMPLETED, (changes) => ({ changes }))
});

/**
 * Clear all subscribers (useful for testing)
 */
export const clearSubscribers = () => {
  subscribers = [];
};

/**
 * Get subscriber count (useful for testing)
 */
export const getSubscriberCount = () => subscribers.length;

/**
 * Selectors - State Query Functions
 * 
 * Pure functions for querying application state.
 * Composable and memoized for performance.
 * 
 * @module core/selectors
 */

import { createSelector } from './state.js';

// ============================================================================
// Navigation Selectors
// ============================================================================

export const getCurrentRoute = createSelector(
  state => state.navigation.currentRoute
);

export const getNavigationHistory = createSelector(
  state => state.navigation.history
);

export const getRouteParams = createSelector(
  state => state.navigation.params
);

export const getRouteQuery = createSelector(
  state => state.navigation.query
);

export const canGoBack = createSelector(
  state => state.navigation.history.length > 0
);

// ============================================================================
// Content Selectors
// ============================================================================

export const getAllNodes = createSelector(
  state => state.content.nodes
);

export const getNodeById = createSelector(
  (state, nodeId) => state.content.nodes[nodeId] || null
);

export const getCurrentNodeId = createSelector(
  state => state.content.currentNodeId
);

export const getCurrentNode = createSelector(
  state => state.content.currentNodeId
    ? state.content.nodes[state.content.currentNodeId]
    : null
);

export const getNodeRelationships = createSelector(
  (state, nodeId) => state.content.relationships[nodeId] || []
);

export const getCurrentNodeRelationships = createSelector(
  state => state.content.currentNodeId
    ? state.content.relationships[state.content.currentNodeId] || []
    : []
);

export const isContentLoading = createSelector(
  state => state.content.loading
);

export const getContentError = createSelector(
  state => state.content.error
);

export const hasContentError = createSelector(
  state => state.content.error !== null
);

// ============================================================================
// User Selectors
// ============================================================================

export const getUserProfile = createSelector(
  state => state.user.profile
);

export const isAuthenticated = createSelector(
  state => state.user.isAuthenticated
);

export const getIdentityProviders = createSelector(
  state => state.user.identityProviders
);

export const getFriends = createSelector(
  state => state.user.friends
);

export const getUserPresence = createSelector(
  state => state.user.presence
);

export const getUserName = createSelector(
  state => state.user.profile?.displayName || 'Guest'
);

export const getUserAvatar = createSelector(
  state => state.user.profile?.avatarUrl
);

// ============================================================================
// Fellowship Selectors
// ============================================================================

export const getRooms = createSelector(
  state => state.fellowship.rooms
);

export const getActiveRoom = createSelector(
  state => state.fellowship.activeRoom
);

export const getRoomMessages = createSelector(
  (state, roomId) => state.fellowship.messages[roomId] || []
);

export const getActiveRoomMessages = createSelector(
  state => state.fellowship.activeRoom
    ? state.fellowship.messages[state.fellowship.activeRoom] || []
    : []
);

export const getRoomParticipants = createSelector(
  (state, roomId) => state.fellowship.participants[roomId] || []
);

export const getActiveRoomParticipants = createSelector(
  state => state.fellowship.activeRoom
    ? state.fellowship.participants[state.fellowship.activeRoom] || []
    : []
);

export const isInRoom = createSelector(
  state => state.fellowship.activeRoom !== null
);

// ============================================================================
// Knowledge Selectors
// ============================================================================

export const getConnections = createSelector(
  state => state.knowledge.connections
);

export const getExploredNodes = createSelector(
  state => state.knowledge.exploredNodes
);

export const getBookmarks = createSelector(
  state => state.knowledge.bookmarks
);

export const getNotes = createSelector(
  state => state.knowledge.notes
);

export const getHighlights = createSelector(
  state => state.knowledge.highlights
);

export const getBookmarkCount = createSelector(
  state => state.knowledge.bookmarks.length
);

export const hasExploredNode = createSelector(
  (state, nodeId) => state.knowledge.exploredNodes.includes(nodeId)
);

export const getNotesForNode = createSelector(
  (state, nodeId) => state.knowledge.notes[nodeId] || []
);

// ============================================================================
// UI Selectors
// ============================================================================

export const getTheme = createSelector(
  state => state.ui.theme
);

export const getFontSize = createSelector(
  state => state.ui.fontSize
);

export const isSidebarOpen = createSelector(
  state => state.ui.sidebarOpen
);

export const getModals = createSelector(
  state => state.ui.modals
);

export const getNotifications = createSelector(
  state => state.ui.notifications
);

export const hasModals = createSelector(
  state => state.ui.modals.length > 0
);

export const hasNotifications = createSelector(
  state => state.ui.notifications.length > 0
);

export const getTopModal = createSelector(
  state => state.ui.modals[state.ui.modals.length - 1] || null
);

// ============================================================================
// Sync Selectors
// ============================================================================

export const getSyncStatus = createSelector(
  state => state.sync.status
);

export const getLastSync = createSelector(
  state => state.sync.lastSync
);

export const getPendingChanges = createSelector(
  state => state.sync.pendingChanges
);

export const getConflicts = createSelector(
  state => state.sync.conflicts
);

export const isSyncing = createSelector(
  state => state.sync.status === 'syncing'
);

export const hasConflicts = createSelector(
  state => state.sync.conflicts.length > 0
);

export const hasPendingChanges = createSelector(
  state => state.sync.pendingChanges.length > 0
);

// ============================================================================
// Composite Selectors (combine multiple state slices)
// ============================================================================

export const getCurrentNodeWithMetadata = createSelector(
  state => {
    const node = state.content.nodes[state.content.currentNodeId];
    if (!node) return null;
    
    const relationships = state.content.relationships[state.content.currentNodeId] || [];
    const bookmarks = state.knowledge.bookmarks.filter(
      b => b.nodeId === state.content.currentNodeId
    );
    const notes = state.knowledge.notes[state.content.currentNodeId] || [];
    
    return {
      ...node,
      relationshipCount: relationships.length,
      bookmarkCount: bookmarks.length,
      noteCount: notes.length,
      isBookmarked: bookmarks.length > 0,
      hasNotes: notes.length > 0
    };
  }
);

export const getDashboardStats = createSelector(
  state => ({
    totalNodes: Object.keys(state.content.nodes).length,
    bookmarkCount: state.knowledge.bookmarks.length,
    connectionCount: state.knowledge.connections.length,
    friendCount: state.user.friends.length,
    exploredNodeCount: state.knowledge.exploredNodes.length
  })
);

export const getAppLoadingState = createSelector(
  state => ({
    contentLoading: state.content.loading,
    syncLoading: state.sync.status === 'syncing',
    isLoading: state.content.loading || state.sync.status === 'syncing'
  })
);

// ============================================================================
// Filter Selectors
// ============================================================================

export const getNodesByType = createSelector(
  (state, type) => Object.values(state.content.nodes).filter(
    node => node.type === type
  )
);

export const getRecentBookmarks = createSelector(
  (state, limit = 10) => state.knowledge.bookmarks
    .slice(-limit)
    .reverse()
);

export const getUnreadNotifications = createSelector(
  state => state.ui.notifications.filter(n => !n.read)
);

// ============================================================================
// Utility Selector Creators
// ============================================================================

/**
 * Create a selector that filters an array from state
 */
export const createFilterSelector = (arraySelector, filterFn) =>
  createSelector(state => {
    const array = arraySelector(state);
    return array.filter(filterFn);
  });

/**
 * Create a selector that maps an array from state
 */
export const createMapSelector = (arraySelector, mapFn) =>
  createSelector(state => {
    const array = arraySelector(state);
    return array.map(mapFn);
  });

/**
 * Create a selector that finds an item in an array from state
 */
export const createFindSelector = (arraySelector, findFn) =>
  createSelector(state => {
    const array = arraySelector(state);
    return array.find(findFn) || null;
  });

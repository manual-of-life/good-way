/**
 * Pure Utility Functions
 * 
 * Collection of pure, reusable utility functions.
 * No side effects, no external dependencies.
 * 
 * @module core/utils
 */

/**
 * Compose multiple functions right-to-left
 * f(g(h(x)))
 * 
 * @param  {...Function} fns - Functions to compose
 * @returns {Function} Composed function
 */
export const compose = (...fns) => 
  x => fns.reduceRight((acc, fn) => fn(acc), x);

/**
 * Pipe multiple functions left-to-right
 * h(g(f(x)))
 * 
 * @param  {...Function} fns - Functions to pipe
 * @returns {Function} Piped function
 */
export const pipe = (...fns) => 
  x => fns.reduce((acc, fn) => fn(acc), x);

/**
 * Currying helper
 * Converts a function with multiple args to chained single-arg functions
 * 
 * @param {Function} fn - Function to curry
 * @returns {Function} Curried function
 */
export const curry = (fn) => {
  const arity = fn.length;
  
  return function curried(...args) {
    if (args.length >= arity) {
      return fn.apply(this, args);
    }
    
    return function(...moreArgs) {
      return curried.apply(this, [...args, ...moreArgs]);
    };
  };
};

/**
 * Partial application
 * Pre-fill some arguments of a function
 * 
 * @param {Function} fn - Function to partially apply
 * @param  {...any} partialArgs - Arguments to pre-fill
 * @returns {Function} Function with partial arguments
 */
export const partial = (fn, ...partialArgs) => 
  (...args) => fn(...partialArgs, ...args);

/**
 * Memoize a pure function
 * Caches results based on arguments
 * 
 * @param {Function} fn - Pure function to memoize
 * @returns {Function} Memoized function
 */
export const memoize = (fn) => {
  const cache = new Map();
  
  return (...args) => {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

/**
 * Debounce function execution
 * 
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (fn, delay) => {
  let timeoutId = null;
  
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    return new Promise(resolve => {
      timeoutId = setTimeout(() => {
        const result = fn(...args);
        resolve(result);
      }, delay);
    });
  };
};

/**
 * Throttle function execution
 * 
 * @param {Function} fn - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (fn, limit) => {
  let lastCall = 0;
  
  return (...args) => {
    const now = Date.now();
    
    if (now - lastCall >= limit) {
      lastCall = now;
      return fn(...args);
    }
    
    return undefined;
  };
};

/**
 * Deep clone an object
 * Creates a complete copy without references
 * 
 * @param {any} obj - Object to clone
 * @returns {any} Cloned object
 */
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, deepClone(value)])
  );
};

/**
 * Deep merge two objects
 * 
 * @param {Object} target - Target object
 * @param {Object} source - Source object
 * @returns {Object} Merged object
 */
export const deepMerge = (target, source) => {
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
    if (key in target && typeof target[key] === 'object' && typeof source[key] === 'object') {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = deepClone(source[key]);
    }
  });
  
  return result;
};

/**
 * Get a value from an object by path
 * 
 * @param {Object} obj - Object to query
 * @param {string} path - Dot-separated path
 * @param {any} defaultValue - Default value if not found
 * @returns {any} Value at path or default
 */
export const getAtPath = (obj, path, defaultValue) => {
  const keys = path.split('.');
  let value = obj;
  
  for (const key of keys) {
    if (value === null || value === undefined || !(key in value)) {
      return defaultValue;
    }
    value = value[key];
  }
  
  return value;
};

/**
 * Set a value in an object by path (immutable)
 * 
 * @param {Object} obj - Object to update
 * @param {string} path - Dot-separated path
 * @param {any} value - New value
 * @returns {Object} New object with updated value
 */
export const setAtPath = (obj, path, value) => {
  const keys = path.split('.');
  const [first, ...rest] = keys;
  
  if (rest.length === 0) {
    return { ...obj, [first]: value };
  }
  
  return {
    ...obj,
    [first]: setAtPath(obj[first], rest.join('.'), value)
  };
};

/**
 * Omit specified keys from an object
 * 
 * @param {Object} obj - Object to omit from
 * @param  {...string} keys - Keys to omit
 * @returns {Object} Object without omitted keys
 */
export const omit = (obj, ...keys) => {
  const result = { ...obj };
  keys.forEach(key => delete result[key]);
  return result;
};

/**
 * Pick specified keys from an object
 * 
 * @param {Object} obj - Object to pick from
 * @param  {...string} keys - Keys to pick
 * @returns {Object} Object with only picked keys
 */
export const pick = (obj, ...keys) => {
  const result = {};
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
};

/**
 * Check if object is empty
 * 
 * @param {Object} obj - Object to check
 * @returns {boolean} True if empty
 */
export const isEmpty = (obj) => {
  if (obj === null || obj === undefined) return true;
  if (Array.isArray(obj)) return obj.length === 0;
  if (typeof obj === 'object') return Object.keys(obj).length === 0;
  if (typeof obj === 'string') return obj === '';
  return false;
};

/**
 * Group array items by a key function
 * 
 * @param {Array} array - Array to group
 * @param {Function} keyFn - Function to extract grouping key
 * @returns {Object} Grouped items
 */
export const groupBy = (array, keyFn) => {
  return array.reduce((groups, item) => {
    const key = keyFn(item);
    return {
      ...groups,
      [key]: [...(groups[key] || []), item]
    };
  }, {});
};

/**
 * Unique items in array
 * 
 * @param {Array} array - Array to deduplicate
 * @returns {Array} Array with unique items
 */
export const unique = (array) => [...new Set(array)];

/**
 * Flatten nested array
 * 
 * @param {Array} array - Array to flatten
 * @param {number} depth - Depth to flatten
 * @returns {Array} Flattened array
 */
export const flatten = (array, depth = 1) => {
  if (depth < 1) return array;
  
  return array.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return [...acc, ...flatten(item, depth - 1)];
    }
    return [...acc, item];
  }, []);
};

/**
 * Range generator
 * 
 * @param {number} start - Start number
 * @param {number} end - End number
 * @returns {Array} Array of numbers
 */
export const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

/**
 * Sleep/delay promise
 * 
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise} Promise that resolves after delay
 */
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Format date as ISO string without time
 * 
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString().split('T')[0];
};

/**
 * Truncate string to max length
 * 
 * @param {string} str - String to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} suffix - Suffix to add
 * @returns {string} Truncated string
 */
export const truncate = (str, maxLength, suffix = '...') => {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
};

/**
 * Capitalize first letter
 * 
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Generate unique ID
 * 
 * @returns {string} Unique identifier
 */
export const generateId = () => {
  return `${Date.now().toString(36)}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Clamp number between min and max
 * 
 * @param {number} num - Number to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped number
 */
export const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

/**
 * Linear interpolation
 * 
 * @param {number} a - Start value
 * @param {number} b - End value
 * @param {number} t - Interpolation factor (0-1)
 * @returns {number} Interpolated value
 */
export const lerp = (a, b, t) => a + (b - a) * t;

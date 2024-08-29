import NodeCache from 'node-cache';

const cache = new NodeCache();

export const setCache = (key, value, ttl) => {
  cache.set(key, value, ttl);
};

export const getCache = (key) => {
  return cache.get(key);
};
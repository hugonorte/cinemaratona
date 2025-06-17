import {useAuthStore} from '@/store/useAuthStore'

export const allStores = {
  useAuthStore,
  // Add other stores here as needed
};

export const dumpAllZustandStates = () => {
  return Object.fromEntries(
    Object.entries(allStores).map(([name, store]) => [name, store.getState()])
  );
};
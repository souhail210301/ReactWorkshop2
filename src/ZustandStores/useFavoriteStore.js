import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],
            addToFavorites: (event) => {
        const currentFavorites = get().favorites;
        const exists = currentFavorites.some(fav => fav.id === event.id);
        
        if (!exists) {
          set(state => ({
            favorites: [...state.favorites, event]
          }));
        }
      },
      
      removeFromFavorites: (eventId) => {
        set(state => ({
          favorites: state.favorites.filter(event => event.id !== eventId)
        }));
      },
      
      isInFavorites: (eventId) => {
        return get().favorites.some(event => event.id === eventId);
      },
      
      getAllFavorites: () => get().favorites
    }),
    {
      name: 'favorites-storage', 
    }
  )
);

export default useFavoriteStore;
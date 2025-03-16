import { create } from "zustand";
const validationMiddleware = (config) => (set, get, api) =>
  config(
    (args) => {
      if (typeof args === "function") {
        const newState = args(get()); 
        if (newState.count !== undefined && newState.count < 0) {
          console.error("Erreur : Le compteur ne peut pas être négatif.");
          return;
        }
        set(args); 
      } else {
        if (args.count !== undefined && args.count < 0) {
          console.error("Erreur : Le compteur ne peut pas être négatif.");
          return;
        }
        set(args);
      }
    },
    get,
    api
  );
const useStoreValidation = create(
    validationMiddleware((set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }))
  );
export default useStoreValidation;



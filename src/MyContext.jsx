import { createContext, useContext, useMemo, useState } from "react";
import { mockOrders, authorizedStoresMock } from "./mocks";

const INITIAL_VALUES = {
  id: 123,
  name: "Jhon"
};

export const MyContext = createContext(INITIAL_VALUES);

export function MyContextProvider({ children }) {
  const [jobs, setJobs] = useState();
  const [isLoading, setIsLoading] = useState();
  const [selectedStore, setSelectedStore] = useState();
  const [stores, setStores] = useState();

  const handleStoreSelection = (chosenStore) => {
    setIsLoading(true);
    setSelectedStore(chosenStore);
  };

  const fetchAuthorizedEntities = useMemo(() => {
    if (!stores) {
      setTimeout(() => {
        // Stores for now, but could be other types...
        setStores(authorizedStoresMock);
        setIsLoading(false);
        return authorizedStoresMock;
      }, 1000);
    }
  }, [stores]);

  const fetchJobs = useMemo(() => {
    if (selectedStore) {
      setTimeout(() => {
        // Orders for now, but could be trips, etc...
        const fetchedJobs = mockOrders();
        setJobs(fetchedJobs);
        setIsLoading(false);
        return fetchJobs;
      }, 1000);
    }
  }, [selectedStore, setIsLoading]);

  return (
    <MyContext.Provider
      value={{
        ...INITIAL_VALUES,
        jobs,
        setJobs,
        fetchJobs,
        selectedStore,
        handleStoreSelection,
        isLoading,
        fetchAuthorizedEntities,
        stores
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within MyContext");
  }

  return context;
}

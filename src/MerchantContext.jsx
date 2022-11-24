import { createContext, useContext } from "react";

const MerchantContext = createContext();

export const MerchantContextProvider = ({ children }) => {
  return <MerchantContext.Provider>{children}</MerchantContext.Provider>;
};

export const useMerchantContext = () => {
  const context = useContext(MerchantContext);
  if (!context) {
    throw new Error(
      "useMerchantContext needs to be used within MerchantContext"
    );
  }

  return context;
};

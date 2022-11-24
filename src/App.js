import "./styles.css";
import { StoreSelector } from "./StoreSelector";
import { AnotherChildComponent } from "./AnotherChildComponent";
import { MyContextProvider } from "./MyContext";

const CLIENT_TYPES = {
  SINGLE_STORE_MERCHANT: "SINGLE_STORE_MERCHANT",
  MULTI_STORE_MERCHANT: "MULTI_STORE_MERCHANT",
  RIDER: "RIDER"
};

export default function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <h1>Select a store to load orders.</h1>
        <StoreSelector />
        <AnotherChildComponent />
      </MyContextProvider>
    </div>
  );
}

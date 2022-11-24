import { useMyContext } from "./MyContext";

export function StoreSelector() {
  const { handleStoreSelection, stores } = useMyContext();

  const handleStoreChange = (e) => {
    handleStoreSelection(e.target.value);
  };

  if (!stores) {
    return <span>Loading stores for user x</span>;
  }

  return (
    <div>
      <form>
        <select onChange={handleStoreChange}>
          <option disabled selected value>
            {" "}
            -- select store --{" "}
          </option>
          {stores.map((s) => {
            return <option key={s.id}>{s.name}</option>;
          })}
        </select>
      </form>
    </div>
  );
}

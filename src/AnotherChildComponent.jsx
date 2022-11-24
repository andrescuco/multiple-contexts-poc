import { useMyContext } from "./MyContext";

const MockComponentOne = ({ orders, isLoading }) => {
  if (isLoading) {
    return <span>Loading...</span>;
  } else {
    return <div>{JSON.stringify(orders)}</div>;
  }
};

const MockComponentTwo = () => {
  return <h1>MockComponentTwo</h1>;
};

const MockComponentThree = () => {
  return <h1>MockComponentThree</h1>;
};

const MOCK_COMPONENTS = {
  MOCK_COMPONENT_ONE: "MockComponentOne",
  MOCK_COMPONENT_TWO: "MockComponentTwo"
};

const MOCK_COMPONENT_MAP = {
  [MOCK_COMPONENTS.MOCK_COMPONENT_ONE]: MockComponentOne,
  [MOCK_COMPONENTS.MOCK_COMPONENT_TWO]: MockComponentTwo,
  MockComponentThree: MockComponentThree
};

const TheComponentThatIWant = MOCK_COMPONENT_MAP["MockComponentOne"];

export const AnotherChildComponent = () => {
  const { selectedStore, jobs, isLoading } = useMyContext();

  return (
    <div>
      <h3>
        {selectedStore
          ? `You've selected ${selectedStore}`
          : "Please select a store to continue"}
      </h3>
      {<TheComponentThatIWant orders={jobs} isLoading={isLoading} />}
    </div>
  );
};

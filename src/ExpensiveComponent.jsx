const ExpensiveComponent = () => {
  console.log("Expensive component rendered!");

  let total = 0;
  for (let i = 0; i < 10000; i++) {
    total += 1;
  }
  return <div>ExpensiveComponent Value: {total}</div>;
};

export default ExpensiveComponent;

// useMemo takes a cost to implement.
// useMemo use's temporary memory to memorize that particular component or function.

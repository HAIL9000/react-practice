import React, { useState } from "react";

function Child(props) {
  const handleClick = () => props.setCount(props.count + 1);
  return (
    <button onClick={handleClick}>
      {props.children}: {props.count}
    </button>
  );
}

function Parent() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <Child count={count} setCount={setCount}>
        Count
      </Child>
    </div>
  );
}

const ExamplePage = () => <Parent />;

export default ExamplePage;

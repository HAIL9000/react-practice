import React, { useState } from "react";

function Child(props) {
  const handleClick = () => props.setCount(props.count + 1);
  return <button onClick={handleClick}>{props.children}</button>;
}

function Parent() {
  let [count, setCount] = useState(0);

  return (
    <div>
      Count: {count}
      <Child count={count} setCount={setCount}>
        +1
      </Child>
    </div>
  );
}

const ExamplePage = () => <Parent />;

export default ExamplePage;

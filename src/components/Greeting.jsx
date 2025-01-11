import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const handleChangeText = () => {
    setChangeText(!changeText);
  };
  return (
    <div>
      <h2>Hello World</h2>
      {changeText ? (
        <Output>Changed!</Output>
      ) : (
        <Output>It is good to see you!</Output>
      )}
      <button onClick={handleChangeText}>Change text</button>
    </div>
  );
};

export default Greeting;

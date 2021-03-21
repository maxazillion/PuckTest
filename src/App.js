import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [thing, setThing] = useState(false);

  function differentWay() {
    setThing(!thing);
  }

  useEffect(() => {
    console.log(thing);
  }, [thing]);

  return (
    <html>
      <head></head>
      <body>
        <button onClick={differentWay}>hello</button>
      </body>
    </html>
  );
}

export default App;

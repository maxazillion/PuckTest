import "./App.css";

function App() {
  return (
    <html>
      <head></head>
      <body>
        <script src="https://www.puck-js.com/puck.js"></script>
        <button onClick="Puck.write('LED1.set();\n');">LED On!</button>
        <button onClick="Puck.write('LED1.reset();\n');">LED Off!</button>
      </body>
    </html>
  );
}

export default App;

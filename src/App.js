import A from "./components/A";
import B from "./components/B";

function App() {
  return (
    <div className="App">
      <A>{(state) => <B value={state} />}</A>
    </div>
  );
}

export default App;

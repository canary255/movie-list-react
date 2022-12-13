import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Hello world!</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;

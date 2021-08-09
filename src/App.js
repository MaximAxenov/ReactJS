import { Provider } from "react-redux";
import { Router } from "./components/Router";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;

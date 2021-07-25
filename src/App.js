import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ItemContainer from "./Components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;

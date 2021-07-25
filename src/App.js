import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserConatainer from "./Components/UserConatainer";
// import ItemContainer from "./Components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserConatainer />
      </div>
    </Provider>
  );
}

export default App;

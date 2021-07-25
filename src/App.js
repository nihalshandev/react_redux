import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import LolipopContainer from "./Components/LolipopContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer/>
        <LolipopContainer />
      </div>
    </Provider>
  );
}

export default App;

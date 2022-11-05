import MainPage from "../Components/MainPage";

import { Provider } from "react-redux";
import { store } from "../store/store";

const Home = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default Home;

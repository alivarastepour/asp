import MainPageContainer from "../Components/MainPage/Container";

import { Provider } from "react-redux";
import { store } from "../store/store";

const Home = () => {
  return (
    <Provider store={store}>
      <MainPageContainer />
    </Provider>
  );
};

export default Home;

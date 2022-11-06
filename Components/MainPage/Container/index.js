import { useSelector } from "react-redux";

import MainPage from "../Presenter";

const MainPageContainer = () => {
  const { all, selected } = useSelector((s) => s);
  return <MainPage all={all} selected={selected} />;
};

export default MainPageContainer;

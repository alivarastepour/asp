import { groupData, groupedData } from "../utills/data";
import DataSection from "./DataSection";
import { Container } from "./MainPage.styles";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/slice";
const MainPage = () => {
  const { all, selected } = useSelector((s) => s);
  // console.log(all);
  // console.log(selected);
  return (
    <>
      <Container>
        <div className="section all">
          <DataSection dataType="All" action="Add" items={groupData(all)} />
        </div>
        <div className="section selected">
          <DataSection
            dataType="Selected"
            action="Remove"
            items={groupData(selected)}
          />
        </div>
      </Container>
    </>
  );
};
export default MainPage;

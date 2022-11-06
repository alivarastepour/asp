import { groupData } from "../utills/data";
import { Container } from "./MainPage.styles";
import { useSelector } from "react-redux";
import DataSectionContainer from "./DataSection/Containter";
const MainPage = () => {
  const { all, selected } = useSelector((s) => s);
  return (
    <>
      <Container>
        <div className="section all">
          <DataSectionContainer
            dataType="All"
            action="Add"
            items={groupData(all)}
          />
        </div>
        <div className="section selected">
          <DataSectionContainer
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

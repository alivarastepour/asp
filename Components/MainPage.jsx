import { groupedData } from "../utills/data";
import DataSection from "./DataSection";
import { Container } from "./MainPage.styles";

const MainPage = () => {
  return (
    <>
      <Container>
        <div className="section all">
          <DataSection dataType="All" action="Add" items={groupedData} />
        </div>
        <div className="section selected">
          <DataSection
            dataType="Selected"
            action="Remove"
            items={groupedData}
          />
        </div>
      </Container>
    </>
  );
};
export default MainPage;

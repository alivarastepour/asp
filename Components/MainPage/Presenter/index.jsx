import DataSectionContainer from "../../DataSection/Container";

import { Container } from "../styles/MainPage.styles";

import { groupData } from "../../../utills/data";

const MainPage = ({ all, selected }) => (
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

export default MainPage;

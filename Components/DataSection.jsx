import { Container } from "./DataSection.styles";
import Section from "./Section";

const DataSection = ({ dataType, action, items }) => {
  return (
    <>
      <Container>
        <div>
          <h1 className="title">{dataType} Data</h1>
        </div>
        <div className="action-container">
          <button className="action">{action}</button>
        </div>
        <div>
          {items.map((item) => {
            return (
              <Section
                key={item[0].uniqueId}
                group={item[0].id}
                quantity={item.length}
                items={item}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default DataSection;

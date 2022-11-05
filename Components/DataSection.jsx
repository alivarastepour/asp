import { useState } from "react";
import { Container } from "./DataSection.styles";
import Section from "./Section";

const DataSection = ({ dataType, action, items }) => {
  const [selected, select] = useState([]);
  const handleSelection = (group) => {
    if (selected.includes(group))
      select((prev) => prev.filter((item) => item !== group));
    else select((prev) => prev.concat(group));
  };
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
              <div
                onClick={() => handleSelection(item[0].id)}
                key={item[0].uniqueId}
              >
                <Section
                  group={item[0].id}
                  quantity={item.length}
                  items={item}
                  selected={selected}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default DataSection;

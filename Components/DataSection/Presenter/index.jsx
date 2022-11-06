import { useState } from "react";

import { Container } from "../styles/DataSection.styles";

import Section from "../../Section/Section";

const DataSection = ({
  dataType,
  action,
  items,
  handleGroupSelection,
  handleSoloSelection,
  selectedItems,
  handleTransform,
}) => {
  const [show, setShow] = useState([]);

  const handleSelectionUI = (group) => {
    if (show.includes(group))
      setShow((prev) => prev.filter((item) => item !== group));
    else setShow((prev) => prev.concat(group));
  };

  return (
    <>
      <Container>
        <div>
          <h1 className="title">{dataType} Data</h1>
        </div>
        <div className="action-container">
          <button
            className="action"
            disabled={selectedItems.length === 0}
            onClick={handleTransform}
          >
            {action}
          </button>
        </div>
        <div>
          {items.map((item) => {
            return (
              <Section
                key={item[0].id}
                group={item[0].id}
                quantity={item.length}
                items={item}
                selected={show}
                onClick={() => handleSelectionUI(item[0].id)}
                handleGroupSelection={(e) =>
                  handleGroupSelection(e, item, item[0].id)
                }
                handleSoloSelection={handleSoloSelection}
                selectedItems={selectedItems}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default DataSection;

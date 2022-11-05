import { useState } from "react";
import { Container } from "./DataSection.styles";
import Section from "./Section";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/slice";
const DataSection = ({ dataType, action, items }) => {
  const [show, setShow] = useState([]);
  const [selectedItems, selectItem] = useState([]);
  const handleGroupSelection = (e, items, group) => {
    e.stopPropagation();
    if (e.target.checked) {
      selectItem((prev) => prev.concat(...items));
    } else {
      selectItem((prev) => prev.filter((item) => item.id !== group));
    }
  };
  console.log(selectedItems);
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
          <button className="action">{action}</button>
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
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default DataSection;

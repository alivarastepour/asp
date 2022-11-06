import { useState } from "react";
import { useDispatch } from "react-redux";

import { actions } from "../../../store/slice";

import DataSection from "../Presenter";

const DataSectionContainer = ({ dataType, action, items }) => {
  const dispatch = useDispatch();

  const [selectedItems, selectItem] = useState([]); // holds values of checked items

  const handleGroupSelection = (e, items, group) => {
    // handles selection/deselection of an entire group
    if (e.target.checked)
      selectItem((prev) =>
        prev.concat(...items.filter((item) => !selectedItems.includes(item)))
      );
    else selectItem((prev) => prev.filter((item) => item.id !== group));
  };

  const handleSoloSelection = (e, item) => {
    // handles selection/deselection of a single item
    if (e.target.checked) selectItem((prev) => prev.concat(item));
    else selectItem((prev) => prev.filter((i) => i.uniqueId !== item.uniqueId));
  };

  const handleTransform = () => {
    // dispatches changes to the store
    if (dataType === "All") dispatch(actions.select(selectedItems));
    else dispatch(actions.remove(selectedItems));
    selectItem([]);
  };

  return (
    <DataSection
      dataType={dataType}
      action={action}
      items={items}
      selectedItems={selectedItems}
      handleGroupSelection={handleGroupSelection}
      handleSoloSelection={handleSoloSelection}
      handleTransform={handleTransform}
    />
  );
};

export default DataSectionContainer;

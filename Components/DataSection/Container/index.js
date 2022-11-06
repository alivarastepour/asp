import { useState } from "react";
import { useDispatch } from "react-redux";

import { actions } from "../../../store/slice";

import DataSection from "../Presenter";

const DataSectionContainer = ({ dataType, action, items }) => {
  const dispatch = useDispatch();

  const [selectedItems, selectItem] = useState([]);

  const handleGroupSelection = (e, items, group) => {
    if (e.target.checked)
      selectItem((prev) =>
        prev.concat(...items.filter((item) => !selectedItems.includes(item)))
      );
    else selectItem((prev) => prev.filter((item) => item.id !== group));
  };

  const handleSoloSelection = (e, item) => {
    if (e.target.checked) selectItem((prev) => prev.concat(item));
    else selectItem((prev) => prev.filter((i) => i.uniqueId !== item.uniqueId));
  };

  const handleTransform = () => {
    if (dataType === "All") dispatch(actions.select(selectedItems));
    else dispatch(actions.remove(selectedItems));
    selectItem([]);
  };

  return (
    <DataSection
      dataType={dataType}
      action={action}
      items={items}
      handleGroupSelection={handleGroupSelection}
      handleSoloSelection={handleSoloSelection}
      selectedItems={selectedItems}
      handleTransform={handleTransform}
    />
  );
};

export default DataSectionContainer;

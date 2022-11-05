import Section from "./Section";

const DataSection = ({ dataType, action, items }) => {
  return (
    <>
      <div>
        <h1>{dataType} Data</h1>
      </div>
      <div>
        <button>{action}</button>
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
    </>
  );
};

export default DataSection;

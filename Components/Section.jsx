const Section = ({ group, quantity, items }) => {
  return (
    <>
      <div>
        <div>{group}</div>
        <div>quantity: {quantity}</div>
        <div>
          <input type="radio" />
        </div>
        <div>{false && items.map((a) => <div>{a.uniqueId}</div>)}</div>
      </div>
    </>
  );
};
export default Section;

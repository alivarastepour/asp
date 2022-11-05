import { Container } from "./Section.styles";

const Section = ({ group, quantity, items, selected }) => {
  return (
    <>
      <Container>
        <div className="group">{group}</div>
        <div>quantity: {quantity}</div>
        <div>
          <input type="checkbox" />
        </div>
        {selected.includes(group) && (
          <div>
            {items.map((a) => (
              <div key={a.uniqueId}>{a.uniqueId}</div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};
export default Section;

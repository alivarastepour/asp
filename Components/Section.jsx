import { Container } from "./Section.styles";

const Section = ({ group, quantity, items }) => {
  return (
    <>
      <Container>
        <div className="group">{group}</div>
        <div>quantity: {quantity}</div>
        <div>
          <input type="checkbox" />
        </div>
        {false && (
          <div>
            {items.map((a) => (
              <div>{a.uniqueId}</div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
};
export default Section;

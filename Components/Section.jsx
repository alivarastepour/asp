import { useState } from "react";
import { Container, Wrapper } from "./Section.styles";

const Section = ({
  group,
  quantity,
  items,
  selected,
  onClick,
  handleGroupSelection,
}) => {

  return (
    <>
      <Container onClick={onClick}>
        <div className="group">{group}</div>
        <div>quantity: {quantity}</div>
        <div>
          <input type="checkbox" onClick={handleGroupSelection} />
        </div>
      </Container>
      {selected.includes(group) && (
        <Wrapper>
          {items.map((a) => (
            <div key={a.uniqueId} className="item">
              <div>#{a.uniqueId}</div>
              <div>{a.created}</div>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          ))}
        </Wrapper>
      )}
    </>
  );
};
export default Section;

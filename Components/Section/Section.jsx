import { Container, Wrapper } from "./Section.styles";

const Section = ({
  group,
  quantity,
  items,
  selected,
  onClick,
  handleGroupSelection,
  handleSoloSelection,
  selectedItems,
}) => (
  <>
    <Container onClick={onClick}>
      <div className="group">{group}</div>
      <div>quantity: {quantity}</div>
      <div>
        <input
          type="checkbox"
          onChange={handleGroupSelection}
          onClick={(e) => e.stopPropagation()}
          checked={
            items.length === selectedItems.filter((b) => b.id === group).length
          }
        />
      </div>
      <div>{selected.includes(group) ? <>&#8593;</> : <>&#8595;</>}</div>
    </Container>
    {selected.includes(group) && (
      <Wrapper>
        {items.map((item) => (
          <div key={item.uniqueId} className="item">
            <div>#{item.uniqueId}</div>
            <div>{item.created}</div>
            <div>
              <input
                type="checkbox"
                onChange={(e) => handleSoloSelection(e, item)}
                checked={selectedItems.includes(item)}
              />
            </div>
          </div>
        ))}
      </Wrapper>
    )}
  </>
);

export default Section;

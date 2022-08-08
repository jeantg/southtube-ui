import Card from "../Card";
import { cardItems } from "./enum";

const CardList = () => {

  return (
    <div className="grid gap-x-8 gap-y-8 grid-cols-4">
      {cardItems.map(cardItem => (
        <Card key={cardItem.id} cardItem={cardItem} />
      ))}
    </div>
  );
};

export default CardList
import Card from "../Card";
import { cardItems } from "./enum";

const CardList = () => {

  return (
    <div className="p-8 max-w-[1550px] grid gap-x-8 gap-y-8 grid-cols-4">
      {cardItems.map(cardItem => (
        <Card key={cardItem.id} cardItem={cardItem} />
      ))}
    </div>
  );
};

export default CardList
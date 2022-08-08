import Image from "next/image";

type CardItemProps = {
  cardItem: {
    id: number;
    title: string;
    channel: string;
    views: string;
    time: string;
  }
}

const Card = ({ cardItem }: CardItemProps) => {
  return (
    <div className="h-[300px] w-[360px] flex-col">
      <Image
        src="/assets/next.png"
        alt="Logo do Jobii"
        width={360}
        height={202}
        className="cursor-pointer"
      />
      <div className="flex gap-4 mt-2">
        <div className="bg-black rounded-full w-9 h-9">
        </div>
        <div>
          <p className="text-lg font-medium">{cardItem.title}</p>
          <p className="text-gray-600">{cardItem.channel}</p>
          <p className="text-gray-600">{cardItem.views} • {cardItem.time}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

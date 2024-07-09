import React from "react";
import { CardProps as CardType } from "./types";

const Card: React.FC<CardType> = ({ card, onClick }) => {
  return (
    <div
      className={`w-32 h-32 flex flex-col items-center justify-center border-2 cursor-pointer overflow-hidden ${card.isFlipped ? "bg-white text" : "bg-gray-400"}`}
      onClick={onClick}
    >
      {card.isFlipped && (
        <>
          <p className="text-sm text-center mb-1.5">{card.message}</p>
          <img src={card.imageUrl} alt="Card" className="w-20 h-20" />
        </>
      )}
    </div>
  );
};

export default Card;

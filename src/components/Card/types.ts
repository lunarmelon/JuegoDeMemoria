export interface Card {
  id: number;
  imageUrl: string;
  message: string;
  popupMessage: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface CardProps {
  card: Card;
  onClick: () => void;
}

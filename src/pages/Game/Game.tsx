import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { Card as CardType } from "../../components/Card/types";
import { Modal } from "../../components/Modal";
import dialoga from "../../images/Dialoga.png";
import juega from "../../images/Juega.png";
import dedica from "../../images/Dedica.png";
import diles from "../../images/Diles.png";
import fomenta from "../../images/Fomenta.png";
import apoyales from "../../images/Apoyales.png";
import ensenales from "../../images/Enseñales.png";
import escucha from "../../images/Escucha.png";
import background from "../../images/bg.png";
import finalPopup from "../../images/family.png";

const cardsData = [
  {
    imageUrl: dialoga,
    message: "Dialoga",
    popupMessage:
      "Dialoga más sin distractores como el teléfono o la televisión.",
  },
  {
    imageUrl: juega,
    message: "Juega",
    popupMessage: "Juega libremente sin que tú impongas las reglas.",
  },
  {
    imageUrl: dedica,
    message: "Dedica",
    popupMessage: "Dedica tiempos a actividades de su interés.",
  },
  {
    imageUrl: diles,
    message: "Diles",
    popupMessage: "Diles lo importante que son en tu vida.",
  },
  {
    imageUrl: fomenta,
    message: "Fomenta",
    popupMessage:
      "Fomenta la lectura con libros y revistas adecuadas a su edad.",
  },
  {
    imageUrl: apoyales,
    message: "Apóyales",
    popupMessage:
      "Apóyales para adquirir nuevas habilidades musicales o artísticas.",
  },
  {
    imageUrl: ensenales,
    message: "Enséñales",
    popupMessage: "Enseñales a realizar las tareas cotidianas sin estrés.",
  },
  {
    imageUrl: escucha,
    message: "Escucha",
    popupMessage: "Escucha y toma en cuenta sus opiniones y propuestas.",
  },
];

const duplicateAndShuffleArray = (array: any[]) => {
  const duplicatedArray = [...array, ...array];
  return duplicatedArray.sort(() => Math.random() - 0.5);
};

const initialCards: CardType[] = duplicateAndShuffleArray(cardsData).map(
  (data, index) => ({
    id: index,
    imageUrl: data.imageUrl,
    message: data.message,
    popupMessage: data.popupMessage,
    isFlipped: false,
    isMatched: false,
  }),
);

const Game = () => {
  const [cards, setCards] = useState<CardType[]>(initialCards);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [modalData, setModalData] = useState<{
    title: string;
    message: string;
    imageUrl: string;
  } | null>(null);
  const [matchedMessages, setMatchedMessages] = useState<CardType[]>([]);
  const [expandedMessageIndexes, setExpandedMessageIndexes] = useState<
    Set<number>
  >(new Set());
  const [gameFinished, setGameFinished] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (cards[firstCard].imageUrl === cards[secondCard].imageUrl) {
        const matchedCard = cards[firstCard];
        setModalData({
          title: matchedCard.message,
          message: matchedCard.popupMessage,
          imageUrl: matchedCard.imageUrl,
        });
        setMatchedMessages((prevMessages) => [...prevMessages, matchedCard]);
        setCards((prevCards) =>
          prevCards.map((card, index) =>
            index === firstCard || index === secondCard
              ? { ...card, isMatched: true }
              : card,
          ),
        );
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, index) =>
              index === firstCard || index === secondCard
                ? { ...card, isFlipped: false }
                : card,
            ),
          );
        }, 600);
      }
      setFlippedCards([]);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (matchedMessages.length === cardsData.length) {
      setGameFinished(true);
      setModalData({
        title: "¡Felicidades!",
        message:
          "Haz encontrado todos los pares. Si deseas jugar de nuevo, recarga el sitio. \nSi quieres consultar más información, consulta las ligas al pie de este sitio o consulta la pestaña de 'Más información'.",
        imageUrl: finalPopup,
      });
    }
  }, [matchedMessages]);

  const handleCardClick = (index: number) => {
    if (
      cards[index].isFlipped ||
      cards[index].isMatched ||
      flippedCards.length === 2
    )
      return;

    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, isFlipped: true } : card,
      ),
    );
    setFlippedCards((prevFlippedCards) => [...prevFlippedCards, index]);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  const toggleExpandMessage = (index: number) => {
    setExpandedMessageIndexes((prevIndexes) => {
      const newIndexes = new Set(prevIndexes);
      if (newIndexes.has(index)) {
        newIndexes.delete(index);
      } else {
        newIndexes.add(index);
      }
      return newIndexes;
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img src={background} alt="background" className="w-full h-screen" />
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h2 className="font-medium mt-5 text-4xl">
          Juego de memoria de crianza positiva
        </h2>
        <p className="mb-10 text-lg mt-1">
          Encuentra los pares para encontrar consejos de crianza positiva para
          padres y madres.
        </p>
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl overflow-auto flex">
          <div className="w-3/4 grid grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
          <div className="w-64 min-h-full max-h-96 p-4 border-l border-gray-200 ml-10 overflow-auto">
            <h2 className="text-xl font-bold mb-4">
              Consejos que has encontrado:
            </h2>
            <ul>
              {matchedMessages.map((card, index) => (
                <li key={index} className="mb-2">
                  <button
                    className="w-full text-left p-2 border rounded-t mb-0 font-medium hover:bg-gray-100"
                    onClick={() => toggleExpandMessage(index)}
                  >
                    {card.message}
                  </button>
                  {expandedMessageIndexes.has(index) && (
                    <div className="p-2 border mb-1 rounded-b bg-white w-full shadow-lg">
                      <p>{card.popupMessage}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {modalData && (
            <Modal
              title={modalData?.title}
              message={modalData?.message}
              imageUrl={modalData?.imageUrl}
              onClose={handleCloseModal}
            />
          )}
        </div>
        <div className="mt-5 text-wrap items-center text-center">
          <h1 className="font-medium">
            Si deseas consultar más información, visita el sitio de la{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://sites.google.com/u/1/d/1sz9wUC9aYXugKyD0Smhe1LsYRT2Rqqkj/p/1BJxURzFmi3xHEDnpNuiIs_3iY7cHd2jp/preview?authuser=1"
            >
              Comisaría Preventiva Municipal de el Salto
            </a>
            .
          </h1>
          <h2 className="font-medium">
            Tambien puedes visitar el sitio del{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://www.gob.mx/sipinna"
            >
              SIPINNA
            </a>
            .
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Game;

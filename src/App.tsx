import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Scores, { Score } from "./components/Scores/Scores";
import AddScoreForm from "./components/AddScoreForm/AddScoreForm";
import Footer from "./components/Footer/Footer";
import CarouselBottom from "./components/Carousel/CarouselBottom";

const initialData = [
  {
    id: 1,
    name: "Alice",
    score: 95,
  },
  {
    id: 2,
    name: "Bob",
    score: 88,
  },
  {
    id: 3,
    name: "Charlie",
    score: 76,
  },
  {
    id: 4,
    name: "Diana",
    score: 92,
  },
  {
    id: 5,
    name: "Eve",
    score: 85,
  },
];

function App() {
  const [addScoreModalOpen, setAddScoreModalOpen] = useState(false);
  const [scores, setScore] = useState(initialData);
  const [newlyAddedScoreId, setNewlyAddedScoreId] = useState<number>();

  const computedScores = useMemo(() => {
    return scores.sort((a, b) => b.score - a.score);
  }, [scores]);

  const addedScoreIsInTen = useMemo(() => {
    if (newlyAddedScoreId && addScoreModalOpen) {
      const findIndex = computedScores.findIndex(
        (sc) => (sc.id = newlyAddedScoreId)
      );
      if (findIndex >= 0 && findIndex <= 9) {
        return true;
      }
    }
    return false;
  }, [newlyAddedScoreId, computedScores, addScoreModalOpen]);

  useEffect(() => {
    if (newlyAddedScoreId) {
      const newAddedRow = document.getElementById(
        newlyAddedScoreId?.toString()
      );
      if (newAddedRow) {
        newAddedRow.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }
  }, [newlyAddedScoreId]);

  const handleClickAddScore = () => {
    setNewlyAddedScoreId(undefined);
    setAddScoreModalOpen(true);
  };

  const onSubmit = (score: Score) => {
    const timeStamp = Date.now();
    setScore((prev) => [
      ...prev,
      {
        ...score,
        id: timeStamp,
      },
    ]);
    setNewlyAddedScoreId(timeStamp);
  };

  return (
    <>
      <div className="App">
        <Header handleClickAddScore={handleClickAddScore} />
        <Scores scores={computedScores} />
        <AddScoreForm
          addedScoreIsInTen={addedScoreIsInTen}
          open={addScoreModalOpen}
          onClose={() => setAddScoreModalOpen(false)}
          onSubmit={onSubmit}
        />
      </div>
      <CarouselBottom />
      <Footer />
    </>
  );
}

export default App;

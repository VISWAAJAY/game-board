import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Scores from './components/Scores/Scores';
import Modal from '@mui/material/Modal';
import { Box, Typography } from '@mui/material';
import AddScoreForm from './components/AddScoreForm/AddScoreForm';
import Footer from './components/Footer/Footer';
import CarouselBottom from './components/Carousel/CarouselBottom';


const intialData = [
    {
        "name": "Alice",
        "score": 95
    },
    {
        "name": "Bob",
        "score": 88
    },
    {
        "name": "Charlie",
        "score": 76
    },
    {
        "name": "Diana",
        "score": 92
    },
    {
        "name": "Eve",
        "score": 85
    }
]





function App() {
  const [addScoreModalOpen, setAddScoreModalOpen] = useState(false)
  const [scores,setScore]=useState(intialData)

  const handleClickAddScore = () => {
    setAddScoreModalOpen(true);
  }


  return (
<>
    <div className="App">
      <Header handleClickAddScore={handleClickAddScore} />
      <Scores scores={scores} />
      <AddScoreForm open={addScoreModalOpen} onClose={() => setAddScoreModalOpen(false)} onSubmit={(score) => {
        setScore(prev => ([...prev, score]))
            setAddScoreModalOpen(false);
      }} />
      </div>
      <CarouselBottom/>
      <Footer/>

      </>
  );
}

export default App;

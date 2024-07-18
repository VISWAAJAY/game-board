import { Score } from "../Scores/Scores";
import { useState } from "react";
import Modal from "../Modal/Modal";
import "./AddScoreForm.styles.css";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (a: Score) => void;
};

function AddScoreForm({ open, onClose, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [score, setScore] = useState<number>(0);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="form-container">
        <h2>Add Score</h2>
        <input
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          id="name"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setScore(parseInt(e.target.value))}
          className="form-input"
          id="score"
          type="number"
          placeholder="Score"
        />
        <button
          className="form-button"
          id="submit"
          disabled={!name || !score}
          onClick={() => {
            onSubmit({ name, score });
          }}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
}

export default AddScoreForm;

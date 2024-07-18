import { useMemo } from "react";
import "./Scores.styles.css";

export type Score = { name: string; score: number };
type Props = {
  scores: Score[];
};

function Scores({ scores }: Props) {
  const computedScores = useMemo(() => {
    return scores.sort((a, b) => b.score - a.score);
  }, [scores]);

  return (
    <table className="styled-table">
      <tr>
        <th align="left" />
        <th align="left">Name</th>
        <th align="left">Points</th>
      </tr>
      {computedScores.map((score, index) => (
        <tr key={`score${index}`}>
          <td>{index + 1}</td>
          <td>{score.name}</td>
          <td>{score.score}</td>
        </tr>
      ))}
    </table>
  );
}

export default Scores;

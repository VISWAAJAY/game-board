import "./Scores.styles.css";

export type Score = { name: string; score: number; id?: number };
type Props = {
  scores: Score[];
};

function Scores({ scores }: Props) {
  return (
    <table className="styled-table">
      <tr>
        <th align="left" />
        <th align="left">Name</th>
        <th align="left">Points</th>
      </tr>
      {scores.map((score, index) => (
        <tr id={score.id?.toString()} key={`score${index}`}>
          <td>{index + 1}</td>
          <td>{score.name}</td>
          <td>{score.score}</td>
        </tr>
      ))}
    </table>
  );
}

export default Scores;

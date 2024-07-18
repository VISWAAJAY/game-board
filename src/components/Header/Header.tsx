import "./Header.styles.css";

type Props = {
  handleClickAddScore: () => void;
};

function Header({ handleClickAddScore }: Props) {
  return (
    <div className="header-container">
      <p>GameBar</p>
      <button onClick={handleClickAddScore} className="action-button">
        Add Score
      </button>
    </div>
  );
}
export default Header;

import "../styles/Button.css";
import sortImg from "/src/assets/images/sort.png";

interface SortButtonProps {
  buttonSort: string;
  onClick?: () => void;
}

export default function SortButton({ buttonSort, onClick }: SortButtonProps) {
  return (
    <>
      <button className="FSbutton" type="button" onClick={onClick}>
        <img className="fs-image" src={sortImg} alt="" />
        {buttonSort}
      </button>
    </>
  );
}

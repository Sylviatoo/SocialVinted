import "../styles/Button.css";
import filterImg from "/src/assets/images/filter.png";

interface ButtonProps {
  buttonFilter: string;
}

export default function FilterButton({ buttonFilter }: ButtonProps) {
  return (
    <>
      <button className="FSbutton" type="button">
        <img className="fs-image" src={filterImg} alt="" />
        {buttonFilter}
      </button>
    </>
  );
}

import sortImg from "/src/assets/images/sort.png";

interface SortButtonProps {
  buttonSort: string;
}

export default function SortButton({ buttonSort }: SortButtonProps) {
  return (
    <>
      <button className="FSbutton" type="button">
        <img className="fs-image" src={sortImg} alt="" />
        {buttonSort}
      </button>
    </>
  );
}

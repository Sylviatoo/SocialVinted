import "../styles/Button.css";

interface ButtonProps {
  buttonFilter: string;
}

export default function FilterButton({ buttonFilter }: ButtonProps) {
  return (
    <>
      <button className="FSbutton" type="button">
        {buttonFilter}
      </button>
    </>
  );
}

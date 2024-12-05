interface SortButtonProps {
  buttonSort: string;
}

export default function SortButton({ buttonSort }: SortButtonProps) {
  return (
    <>
      <button className="FSbutton" type="button">
        {buttonSort}
      </button>
    </>
  );
}

import "/src/styles/Button.css";
import { useState } from "react";
import filterImg from "/src/assets/images/filter.png";

interface ButtonProps {
  buttonFilter: string;
  renderFilterOptions?: () => React.ReactNode;
}

export default function FilterButton({
  buttonFilter,
  renderFilterOptions,
}: ButtonProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="filter-button-container">
      <button className="FSbutton" type="button" onClick={toggleFilter}>
        <img className="fs-image" src={filterImg} alt="" />
        {buttonFilter}
      </button>

      {isFilterOpen && renderFilterOptions && (
        <div className="filter-dropdown">{renderFilterOptions()}</div>
      )}
    </div>
  );
}

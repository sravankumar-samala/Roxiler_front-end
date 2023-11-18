import { monthsData } from "../data";

export default function StatsHeading({ month, headingText }) {
  return (
    <h2>
      {headingText} - <span>{monthsData[month - 1]} </span>
      <span className="info-text"> ( Select month from dropdown )</span>
    </h2>
  );
}

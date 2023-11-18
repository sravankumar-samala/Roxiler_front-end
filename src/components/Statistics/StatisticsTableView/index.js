export default function StatisticsTableView({ statisticsData }) {
  if (!statisticsData) return;
  const { totalSaleAmount, totalSoldItems, totalUnsoldItems } = statisticsData;

  return (
    <ul className="statistics-list-container">
      <li className="statistics-item">
        <p className="statistics-title">total sales</p>
        <p className="statistics-value">{+totalSaleAmount.toFixed(2)}</p>
      </li>
      <li className="statistics-item">
        <p className="statistics-title">total sold items</p>
        <p className="statistics-value">{totalSoldItems}</p>
      </li>
      <li className="statistics-item">
        <p className="statistics-title">total not sold items</p>
        <p className="statistics-value">{totalUnsoldItems}</p>
      </li>
    </ul>
  );
}

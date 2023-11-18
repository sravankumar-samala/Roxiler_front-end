import { useProductsContext } from "../../../context/productsContex";
import "./index.css";
export default function Limit() {
  const { limit, changeLimit } = useProductsContext();
  return (
    <label htmlFor="limit" className="limit-label">
      Limit:{" "}
      <select
        value={limit}
        id="limit"
        onChange={changeLimit}
        className="limit-select"
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
      <span className="tooltip">Choose limit below 4 to test pagination</span>
    </label>
  );
}

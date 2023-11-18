import RenderTransaction from "../RenderTransaction";

export default function RenderTransactionsTable({ transactionsData }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="header-row">
            <th>Product</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Sold</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactionsData?.products.map((eachProduct) => (
            <RenderTransaction key={eachProduct.id} productObj={eachProduct} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

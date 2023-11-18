import TransactionsList from "./components/TransactionsList";
import Form from "./components/Form";
import Statistics from "./components/Statistics";
import BarChartStats from "./components/BarChart";
import PieChartStats from "./components/PieChart";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper-container">
      <header className="app-header">
        <h1>Product Transactions</h1>
      </header>

      <main className="main-container">
        <Form />
        <TransactionsList />
        <Statistics />
        <BarChartStats />
        <PieChartStats />
      </main>
    </div>
  );
}

export default App;

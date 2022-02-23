import "./App.css";
import IncomeForm from "./components/IncomeForm/IncomeForm";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import { Dashboard } from "./Pages/Dashboard";

function App() {
	return (
		<div className="App">
			<div className="split">
				<div>
					<h2>Account Summary</h2>
					<h3>Source Of Income</h3>
					<h3>List Of Expenses</h3>
				</div>

				<div className="account-pie">
					<Dashboard />
				</div>
			</div>
			<table>
				<tr>
					<th>Company</th>
					<th>Contact</th>
					<th>Country</th>
				</tr>
				<tr>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
				</tr>
				<tr>
					<td>Centro comercial Moctezuma</td>
					<td>Francisco Chang</td>
					<td>Mexico</td>
				</tr>
			</table>
		</div>
	);
}

export default App;

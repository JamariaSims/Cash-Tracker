import React,{useState} from 'react'

function ExpenseForm() {
	const [expenseAmount, setExpenseAmount] = useState(0);
	const [expenseData, setExpenseData] = useState([]);
    const [form, setForm] = useState({
		name: "",
		amount: "",
		frequency: "weekly",
	});
	var expensesAmount = 0;

	const onInputChange = (event) => {
		event.preventDefault();
		const { target } = event;
		const { name, value } = target;
		setForm({ ...form, [name]: value });
	};

	const onInputSubmit = (event) => {
		event.preventDefault();
		const { target } = event;
		const { name, value } = target;
		setExpensesList(...expensesList, form);
	};
  return (
    <div className="income-form">
				<h2>Expenses</h2>
				<form>
					<label>Name</label>
					<br />
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={onInputChange}
					/>
					<br />
					<label>Amount</label>
					<br />
					<input
						type="text"
						name="amount"
						value={form.amount}
						onChange={onInputChange}
					/>
					<br />
					<label>Frequency</label>
					<br />
					<select
						id={"frequency"}
						name={"frequency"}
						onChange={onInputChange}
						value={form.frequency}
					>
						<option value={4}>Weekly</option>
						<option value={2}>Bi-Weekly</option>
						<option value={1}>Monthly</option>
					</select>

					<br />
					<button type="submit" onClick={onInputSubmit}>
						Submit
					</button>
				</form>
			</div>
  )
}

export default ExpenseForm
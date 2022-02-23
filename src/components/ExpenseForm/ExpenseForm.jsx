import React,{useState} from 'react'
import PropTypes from "prop-types"
import './ExpenseForm.css'

const initialAmount = 0
const initialForm = {
  name: "",
  amount: 0,
  frequency: "Weekly",
}
function ExpenseForm() {
  const [expenseAmount, setExpenseAmount] = useState(initialAmount);
	const [expenseData, setExpenseData] = useState([]);
  const [form, setForm] = useState(initialForm);
	const onInputChange = (event) => {
		event.preventDefault();
		const { target } = event;
		const { name, value } = target;
		setForm({ ...form, [name]: value });
	};

	const onInputSubmit = (event) => {
		event.preventDefault();
    setExpenseData([...expenseData,form])
    updateExpense(form.frequency)
    setForm(initialForm)
	};

  const updateExpense = (frequency) => {
    if(frequency === "Bi-Weekly"){
      setExpenseAmount(current=>current+parseInt(form.amount)*2)
    }else if(frequency === "Weekly"){
      setExpenseAmount(current=>current+parseInt(form.amount)*4)
    }else{
      setExpenseAmount(current=>current+parseInt(form.amount))
    }
  }
  return (
    <div className="income-form">
				<h2>Expense</h2>
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
						<option value={"Weekly"}>Weekly</option>
						<option value={"Bi-Weekly"}>Bi-Weekly</option>
						<option value={"Monthly"}>Monthly</option>
					</select>

					<br />
					<button type="submit" onClick={onInputSubmit}>
						Submit
					</button>
				</form>
        <div className="income-section" >
          <h2>Monthly Expense: ${expenseAmount}</h2>
		  <div className="income-item" id={expenseData.length} key={expenseData.length}>
				<div>            <p>Name</p></div>
				<div>
            <p>Amount</p></div>
				<div>
            <p>Frequency</p></div>

            </div>
          {expenseData.length > 0 ? <div>{expenseData.map((entry)=>{
            return <div className="income-item" id={expenseData.length} key={expenseData.length}>
				<div>
					<p>{entry.name}</p>
				</div>
				<div>
            		<p>${entry.amount}</p>
				</div>
				<div>
            		<p>{entry.frequency}</p>
				</div>
            	</div>
          })}
		  </div>:<div className="income-default">No Data Available.....</div>}
        </div>
			</div>
  )
}

ExpenseForm.propTypes = {
  initialAmount:PropTypes.number,
  expenseData:PropTypes.array,
}
export default ExpenseForm
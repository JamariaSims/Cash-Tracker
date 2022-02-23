import React,{useState} from 'react'
import PropTypes from "prop-types"
import './IncomeForm.css'

const initialAmount = 0
const initialForm = {
  name: "",
  amount: 0,
  frequency: "Weekly",
}
function IncomeForm() {
  const [incomeAmount, setIncomeAmount] = useState(initialAmount);
	const [incomeData, setIncomeData] = useState([]);
  const [form, setForm] = useState(initialForm);
	const onInputChange = (event) => {
		event.preventDefault();
		const { target } = event;
		const { name, value } = target;
		setForm({ ...form, [name]: value });
	};

	const onInputSubmit = (event) => {
		event.preventDefault();
    setIncomeData([...incomeData,form])
    updateIncome(form.frequency)
    setForm(initialForm)
	};

  const updateIncome = (frequency) => {
    if(frequency === "Bi-Weekly"){
      setIncomeAmount(current=>current+parseInt(form.amount)*2)
    }else if(frequency === "Weekly"){
      setIncomeAmount(current=>current+parseInt(form.amount)*4)
    }else{
      setIncomeAmount(current=>current+parseInt(form.amount))
    }
  }
  return (
    <div className="income-form">
				<h2>Income</h2>
				<form>
					<label>Occupance</label>
					<br />
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={onInputChange}
					/>
					<br />
					<label>Salary</label>
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
          <h2>Monthly Income: ${incomeAmount}</h2>
		  <div className="income-item" id={incomeData.length} key={incomeData.length}>
				<div>            <p>Occupance</p></div>
				<div>
            <p>Salary</p></div>
				<div>
            <p>Frequency</p></div>

            </div>
          {incomeData.length > 0 ? <div>{incomeData.map((entry)=>{
            return <div className="income-item" id={incomeData.length} key={incomeData.length}>
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

IncomeForm.propTypes = {
  initialAmount:PropTypes.number,
  incomeData:PropTypes.array,
}
export default IncomeForm
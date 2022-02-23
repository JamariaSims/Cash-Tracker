<expenseForm />
			<div>
				<div className="account-summary">
					<div className="flex-column">
						<div className="summary-header">
							<h3>Monthly Income</h3>
							<h3>${incomeAmount}</h3>
						</div>
						<div>
							{income.length > 0 ? (
								income.map((entry) => {
									return (
										<div className="summary-item">
											<span></span>
											<p>{entry.name}</p>
											<p>{entry.amount}</p>
										</div>
									);
								})
							) : (
								<p>No income showing . . .</p>
							)}
						</div>

						<div className="summary-footer">
							<h3>Monthly Expenses</h3>
							<h3>${expensesAmount}</h3>
						</div>
						<div>
							{expenses.length > 0 ? (
								expenses.map((entry) => {
									return (
										<div className="summary-item">
											<p>{entry.name}</p>
											<p>{entry.frequency}</p>
											<p>{entry.amount}</p>
										</div>
									);
								})
							) : (
								<p>No expenses showing . . .</p>
							)}
						</div>
					</div>
				</div>
			</div>
import ExpenseItem from "./components/ExpenseItem";

function App() {
	const NewExpenses = [
		{
			id: "n1",
			title: "Shower Towel",
			amount: 50.12,
			date: new Date(2021, 3, 14),
		},
		{
			id: "n2",
			title: "A Trip to Jeju",
			amount: 1400.9,
			date: new Date(2021, 8, 7),
		},
		{
			id: "n3",
			title: "New Computer",
			amount: 2094.52,
			date: new Date(2021, 12, 4),
		},
	];
	const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 14) },
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.52,
			date: new Date(2021, 4, 4),
		},
		{
			id: "e4",
			title: "New Phone",
			amount: 1434.12,
			date: new Date(2021, 7, 26),
		},
	];

	return (
		<div>
			<h2>Let's get started!</h2>
			<div className="new-expenses">
				<ExpenseItem
					title={NewExpenses[0].title}
					amount={NewExpenses[0].amount}
					date={NewExpenses[0].date}
				/>
				<ExpenseItem
					title={NewExpenses[1].title}
					amount={NewExpenses[1].amount}
					date={NewExpenses[1].date}
				/>
				<ExpenseItem
					title={NewExpenses[2].title}
					amount={NewExpenses[2].amount}
					date={NewExpenses[2].date}
				/>
			</div>
			<ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			/>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			/>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			/>
			<ExpenseItem
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			/>
		</div>
	);
}

export default App;

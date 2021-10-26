import React, { useState } from "react";

import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
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

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		// 동일한 상태의 이전 스냅샷을 기반으로 하는 경우,
		// state를 깔끔하게 업데이트하는 방법.
		setExpenses((prevExpenses) => {
			return [expense, ...expenses];
		});
	};

	// React 작동방식.

	// return React.createElement(
	// 	"div",
	// 	{},
	// 	React.createElement("h2", {}, "Let's get started!"),
	// 	React.createElement(Expenses, { items: expenses }),
	// );

	return (
		<div>
			<NewExpenses onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;

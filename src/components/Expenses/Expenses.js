import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2021");
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filterExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					seleted={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{/* map를 사용해서 데이터 목록을 동적으로 출력 */}
				{filterExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;

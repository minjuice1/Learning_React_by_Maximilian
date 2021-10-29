import Button from "../../UI/Button/Button";
import "./UserInput.css";

const UserInput = () => {
	return (
		<div>
			<form>
				<div>
					<label>UserName</label>
					<input type="text" />
					<label>Age (Years)</label>
					<input type="text" />
				</div>
				<Button type="submit">Add User</Button>
			</form>
		</div>
	);
};

export default UserInput;

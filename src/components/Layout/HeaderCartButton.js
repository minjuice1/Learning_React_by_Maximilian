import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	return (
		<button classes={classes.button}>
			<span classes={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span classes={classes.badge}>3</span>
		</button>
	);
};

export default HeaderCartButton;

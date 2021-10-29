import React from "react";
import AddUser from "../Users/AddUser";

import classes from "./Card.module.css";

const Card = (props) => {
	return (
		// card.modules.css의 card와 AddUser.module.css의 input부분을 props로 해서 받아옴.
		<div className={`${classes.card} ${props.className}`}>{props.children}</div>
	);
};

export default Card;

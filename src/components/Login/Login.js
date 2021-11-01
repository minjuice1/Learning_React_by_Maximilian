import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.includes("@") };
	}
	if (action.type === "INPUT_BLUR") {
		return { value: state.value, isValid: state.value.includes("@") };
	}
	return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	}
	if (action.type === "INPUT_BLUR") {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: "", isValid: false };
};

const Login = (props) => {
	// const [enteredEmail, setEnteredEmail] = useState("");
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState("");
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: null,
	});

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: null,
	});

	// useEffect(() => {
	// 	console.log("EFFECT RUNNING");

	// 	// 만약 enteredEmail + return을 추가하면 => "EFFECT RUNNING" 다음 "EFFECT CLEANUP" 가 실행됨.
	// 	// 만약 []만 있다면 => 처음에 "EFFECT RUNNING" 나오고, Login을 하게 되면 그 후에
	// 	// DOM에서 구성요소가 제거되면서 "EFFECT CLEANUP"가 실행 됨.
	// 	return () => {
	// 		console.log("EFFECT CLEANUP");
	// 	};
	// 	// 만약 []가 없다면 => 처음과 모든 업데이트에 "EFFECT RUNNING" 실행
	// 	// 만약 []만 있다면 => 처음에만 "EFFECT RUNNING" 실행
	// 	// 만약 enteredEmail가 있다면 => enteredEmail에서 업데이트를 할 경우 계속 "EFFECT RUNNING" 실행.
	// }, [enteredEmail]);

	// useEffect(() => {
	// 	const identifier = setTimeout(() => {
	// 		console.log("setTimeout test");
	// 		setFormIsValid(
	// 			enteredEmail.includes("@") && enteredPassword.trim().length > 6,
	// 		);
	// 	}, 500);

	// 	// cleanUp function : useEffect 함수가 실행 될 때마다, 처음 실행되는 경우를 제외하고는
	// 	// cleanUp function이 실행되면서, setTimeout 함수 (side function)가 재실행 됨.
	// 	return () => {
	// 		console.log("cleanUp ");
	// 		clearTimeout(identifier);
	// 	};
	// 	// Dependency(종속성)(enteredEmail, enteredPassword)가 변경될 때마다, 다시 실행 됨.
	// }, [enteredEmail, enteredPassword]);

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });

		setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: "USER_INPUT", val: event.target.value });

		setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: "INPUT_BLUR" });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: "INPUT_BLUR" });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div
					className={`${classes.control} ${
						emailState.isValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="email">E-Mail</label>
					<input
						type="email"
						id="email"
						value={emailState.value}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordState.isValid === false ? classes.invalid : ""
					}`}
				>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={passwordState.value}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;

import React from "react";
import styled, { css } from "styled-components";
import { isloggedInVar } from "./apollo";

export default function Login() {
	return (
		<div>
			<button onClick={() => isloggedInVar(true)}>Login</button>
		</div>
	);
}

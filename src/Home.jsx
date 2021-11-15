import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { isloggedInVar } from "./apollo";

export default function Home() {
	return (
		<div>
			Home
			<button onClick={() => isloggedInVar(false)}>logout</button>
		</div>
	);
}

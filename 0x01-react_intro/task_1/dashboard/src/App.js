:root {
	--primary-color: #E11D3F;
	font: 18px Helvetica, Arial, sans-serif;
}

.App {
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
}

.App-header {
	display: flex;
	flex-direction: row;
	align-items: center;
	color: var(--primary-color);
	border-bottom: 3px solid var(--primary-color);
}

.App-logo {
	height: 200px;
	width: 200px;
}

.App-body {
	display: flex;
	flex-direction: column;
	margin: 3rem;
	min-height: 50vh;
}

.App-footer {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-top: 3px solid var(--primary-color);
	padding: 1rem;
	font-style: italic;
}

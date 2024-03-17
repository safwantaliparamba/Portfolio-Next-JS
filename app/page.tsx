const Home = () => {
	const mailSender = async () => {
		"use server"

		return {
			title: "Success",
			message: "Server actions success"
		}
	}

	return (
		<div>
			<form action={mailSender}>
				<button type="submit">Click me</button>
			</form>
		</div>
	);
};

export default Home;

import client from "../index.ts";

const pushToQueue = async (push) => {
	await client.connect();
	await client.quit();
}

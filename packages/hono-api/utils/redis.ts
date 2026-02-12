import client from "@repo/redis";
import { createId } from '@paralleldrive/cuid2';
import crypto from "crypto";

const saveOtp = async (userId: string) => {
	await client.connect();
	const otp = String(crypto.randomInt(100000, 999999));
	await client.set(
		`otp:${userId}`,
		JSON.stringify({
			otp,
			createdAt: new Date().toISOString(),
		})
	);
	return otp;
};

const getOtp = async (userId: string) => {
	await client.connect();
	const data = await client.get(`otp:${userId}`);

	if (!data) {
		return null;
	}

	const obj: {
		otp: string;
		createdAt: string;
	} = JSON.parse(data);

	const createdAt = new Date(obj.createdAt);
	const now = new Date();

	const diffInMs = now.getTime() - createdAt.getTime();
	const diffInMinutes = diffInMs / (1000 * 60);

	if (diffInMinutes > 10) {
		await client.del(`otp:${userId}`);
		return null;
	}

	await client.del(`otp:${userId}`);
	return obj.otp;
};


const saveAndGetForgotPasswordSlug = async (email: string) => {
	const slug = createId();
	await client.connect();
	client.set(`password-slug-for-email:${email}`, JSON.stringify({
		slug,
		createdAt: new Date().toISOString(),
	}))
	return slug;
}

const VerifyPasswordSlug = async (email: string, slug: string) => {
	await client.connect();

	const key = `password-slug-for-email:${email}`;
	const data = await client.get(key);

	if (!data) return false;

	const obj: {
		slug: string;
		createdAt: string;
	} = JSON.parse(data);

	if (obj.slug !== slug) return false;

	const createdAt = new Date(obj.createdAt);
	const now = new Date();

	const diffInMinutes =
		(now.getTime() - createdAt.getTime()) / (1000 * 60);

	if (diffInMinutes > 20) {
		await client.del(key);
		return false;
	}

	await client.del(key);

	return true;
};

export {
	saveOtp,
	getOtp,
	saveAndGetForgotPasswordSlug,
	VerifyPasswordSlug
};

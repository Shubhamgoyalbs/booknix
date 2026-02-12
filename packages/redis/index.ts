import { createClient } from 'redis';

const client = createClient({
	url: 'http://localhost:6379'
});

client.on('error', err => console.log('Redis Client Error', err));

export default client;

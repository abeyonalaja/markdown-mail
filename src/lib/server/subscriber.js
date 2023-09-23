import { db } from './db';

export function subscribe(data) {
	return db.subscriber.create({
		data: {
			...data,
			status: 'SUBSCRIBED',
			confirmationCode: crypto.randomUUID(),
			unscubscriptionCode: crypto.randomUUID()
		}
	});
}

import { db } from '$lib/server/db.js';
import { faker } from '@faker-js/faker';

await db.subscriber.createMany({
	data: Array.from({ length: 1000 }).map(() => {
		return {
			email: faker.internet.email(),
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			status: 'SUBSCRIBED',
			confirmationCode: crypto.randomUUID(),
			unscubscriptionCode: crypto.randomUUID()
		};
	})
});

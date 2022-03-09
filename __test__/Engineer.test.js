const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('jamille', '411', 'jd@gmail.com', 'jamillerooks');

test('test constructor value for engineer object', () => {
	expect(engineer.name).toBe('jamille');
	expect(engineer.id).toBe('411');
	expect(engineer.email).toBe('jd@gmail.com');
	expect(engineer.github).toBe('jamillerooks');
});

test('test getName() method', () => {
	expect(engineer.getName()).toBe('jamille');
});

test('test getId() method', () => {
	expect(engineer.getID()).toBe('411');
});

test('test getEmail() method', () => {
	expect(engineer.getEmail()).toBe('jd@gmail.com');
});

test('test getGithub() method', () => {
	expect(engineer.getGithub()).toBe('jamillerooks');
});

test('test getRole() method', () => {
	expect(engineer.getRole()).toBe('Engineer');
});

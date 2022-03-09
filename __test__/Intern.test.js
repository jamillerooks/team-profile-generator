const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');
const intern = new Intern('jamille', '411', 'jd@gmail.com', 'UGA');

test('test constructor value for intern object', ()=>{
    expect(intern.name).toBe('jamille');
    expect(intern.id).toBe('411');
    expect(intern.email).toBe('jd@gmail.com');
    expect(intern.school).toBe('UGA');
});

test('test getName() method', ()=> {
    expect(intern.getName()).toBe('jamille');
});

test('test getId() method', ()=> {
    expect(intern.getID()).toBe('411');
});

test('test getEmail() method', ()=> {
    expect(intern.getEmail()).toBe('jd@gmail.com');
});

test('test getSchool() method', ()=> {
    expect(intern.getSchool()).toBe('UGA');
});

test('test getRole() method', ()=> {
    expect(intern.getRole()).toBe('Intern');
});
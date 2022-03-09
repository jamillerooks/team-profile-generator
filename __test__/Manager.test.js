const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');
const manager = new Manager('jamille', '411', 'jd@gmail.com', '100');

test('test constructor value for manager object', ()=>{
    expect(manager.name).toBe('jamille');
    expect(manager.id).toBe('411');
    expect(manager.email).toBe('jd@gmail.com');
    expect(manager.officeNumber).toBe('100');
});

test('test getName() method', ()=> {
    expect(manager.getName()).toBe('jamille');
});

test('test getId() method', ()=> {
    expect(manager.getID()).toBe('411');
});

test('test getEmail() method', ()=> {
    expect(manager.getEmail()).toBe('jd@gmail.com');
});

test('test getOfficeNumber() method', ()=> {
    expect(manager.getOfficeNumber()).toBe('100');
});

test('test getRole() method', ()=> {
    expect(manager.getRole()).toBe('Manager');
});
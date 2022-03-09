const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');
const employee = new Employee('jamille', '411', 'jd@gmail.com');

test('test constructor value for employee object', ()=>{
    expect(employee.name).toBe('jamille');
    expect(employee.id).toBe('411');
    expect(employee.email).toBe('jd@gmail.com');
});

test('test getName() method', ()=> {
    expect(employee.getName()).toBe('jamille');
});

test('test getId() method', ()=> {
    expect(employee.getID()).toBe('411');
});

test('test getEmail() method', ()=> {
    expect(employee.getEmail()).toBe('jd@gmail.com');
});

test('test getRole() method', ()=> {
    expect(employee.getRole()).toBe('Employee');
});
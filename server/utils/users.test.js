
const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Tom',
            room: 'Test Room'
        }, {
            id: '2',
            name: 'Sara',
            room: 'Test Room 2'
        }, {
            id: '3',
            name: 'John',
            room: 'Test Room'
        }]
    })

    it('Should add new user', () => {
        let users = new Users();
        let user = {
            id: 123,
            name: 'Darek',
            room: 'Test room'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('Should remove a user', () => {
        let id = '1';
        let user = users.removeUser(id);
        expect(user.id).toBe(id);
        expect(users.users.length).toBe(2);
    });

    it('Should not remove user', () => {
        let id = '100';
        let user = users.removeUser(id);
        expect(user).toNotExist;
        expect(users.users.length).toBe(3);
    });

    it('Should find user', () => {
        let id = '2';
        let user = users.getUser(id);
        expect(user.id).toBe(id);
    });

    it('Should not find user', () => {
        let id = '100';
        let user = users.getUser(id);
        expect(user).toNotExist();
    });

    it('Should return names for Test Room', () => {
        let userList = users.getUserList('Test Room');
        expect(userList).toEqual(['Tom', 'John']);
    });

    it('Should return names for Test Room 2', () => {
        let userList = users.getUserList('Test Room 2');
        expect(userList).toEqual(['Sara']);
    });

});
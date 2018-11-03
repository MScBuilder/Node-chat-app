const _ = require('lodash');
[{
    id: '/#adjgaldkgjap987jg',
    name: 'Darek',
    room: 'The Office Fans'
}]

class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        let user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser (id) {
            let removedUser;
            this.users = this.users.filter((user) => {
              if (user.id === id) {
                removedUser = user;
                return false;
              }
              return true;
            })
            return removedUser;
          }

    getUser(id) {
        return this.users.filter((user) => user.id === id)[0];
        
    }
    getUserList(room) {
        let users = this.users.filter((user) => user.room === room);
        let namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};

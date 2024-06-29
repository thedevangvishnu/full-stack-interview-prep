// Module Pattern

function myModule() {
  const _privateKey = 1234;
  function _logPrivate() {
    console.log("Cannot access private key!");
  }

  return {
    publicKey: _privateKey + 1111,
    logPublicKey: function () {
      console.log("Public Key:", this.publicKey);
    },
  };
}

const md = myModule();
// md.logPublicKey();

// Revealing Module Pattern

const userModule = (function userManagement() {
  const _baseUserId = 1111;
  const _users = [];

  function _logNewUser(name) {
    console.log("New user added:", name);
  }

  function getOnlyUserNames() {
    return _users.map((user) => user.name);
  }

  function addUser(name) {
    const newUser = {
      name,
      id: _baseUserId + parseInt(Math.random() * 900 + 100),
    };
    _users.push(newUser);
    _logNewUser(name);
  }

  function logUsersWithUserName() {
    const userNames = getOnlyUserNames();
    console.log(userNames);
  }

  function logUsers() {
    console.log(_users);
  }

  return {
    addNewUser: addUser,
    logUsersWithUserName,
    logUsers,
  };
})();

userModule.addNewUser("Devang");
userModule.addNewUser("Amika");
userModule.addNewUser("Shivam");
userModule.addNewUser("Ankit");
userModule.addNewUser("Preet");

userModule.logUsersWithUserName();
userModule.logUsers();

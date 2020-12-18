const btnTask2 = document.querySelector('.btn2');
btnTask2.addEventListener('click', startHandler2);

function startHandler2() {
  const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

  const toggleUserState = (allUsers, userName) => {
    return new Promise(resolve => {
      const updatedUsers = allUsers.map(user => {
        if (user.name === userName) {
          const newUserState = { ...user, active: !user.active };

          return newUserState;
        }

        return user;
      });

      resolve(updatedUsers);
    });
  };

  const logger = updatedUsers => console.table(updatedUsers);

  /*
   * Сейчас работает так
   */
  // toggleUserState(users, 'Mango', logger);
  // toggleUserState(users, 'Lux', logger);

  /*
   * Должно работать так
   */
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);
}

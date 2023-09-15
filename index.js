module.exports = () => {
  const data = { 
    users: [],
 };

  // Create 1000 users
  for (let i = 0; i < 20; i++) {
    data.users.push({ 
        id: i, 
        username: `user-${i}`,
        name: `anonim-${i}`,
        email: `user${i}@gmail.com`,
        password: '12345'
    });
  }
  return data;
};

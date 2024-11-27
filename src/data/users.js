const users = [
    {
      email: "tapas@mail.com",
      password: "password",
    },
    {
      email: "starfy@mail.com",
      password: "password",
    },
    {
      email: "koko@mail.com",
      password: "password",
    },
  ];
  
  export const getUserByEmail = (email) => {
    const found = users.find((user) => user.email === email);
    return found;
  };
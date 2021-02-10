const initialState = {
  profileUrl:
    "https://avatars1.githubusercontent.com/u/25723193?s=60&u=5f2d871352830fdf1a79ee285e0712044105ca91&v=4",
  userName: "yukiyohure",
  email: "example@mock.com",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default profileReducer;

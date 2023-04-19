import handleProfileSignup from "./3-all";

const user = handleProfileSignup();

user.then((r) => console.log(r))

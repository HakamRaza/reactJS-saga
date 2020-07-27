import auth from "./auth";
import profile from "./profile";
import todo from "./todo";

// importing folder files
export default {
  ...auth,
  ...profile,
  ...todo,
};

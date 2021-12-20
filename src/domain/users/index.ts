import buildMakeUsers from "./users";
import Id from "../../infrastructure/post/Id";
import validator from "../../infrastructure/post/validator";

const makeUser = buildMakeUsers({
    Id,
    validator
});

export default makeUser;
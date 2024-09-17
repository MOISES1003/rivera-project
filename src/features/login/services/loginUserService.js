import {
    createUserFailure,
    createUserStart,
    createUserOne,
} from "../store/userSlice";
import UserRepository from "../../../core/infrastructure/reportories/UserRepository";
import LoginUser from "../../../core/domain/users/useCases/commands/LoginUser";
const userRepository = new UserRepository();
const loginUserUseCase = new LoginUser(userRepository);

export const loginUser = (user) => async(dispatch) => {
    dispatch(createUserStart());
    try {
        await loginUserUseCase.execute(user);
        dispatch(createUserOne(user));
    } catch (error) {
        dispatch(createUserFailure(error.toString()));
    }
};
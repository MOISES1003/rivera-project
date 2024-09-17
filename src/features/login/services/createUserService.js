import {
    createUserFailure,
    createUserStart,
    createUserOne,
} from "../store/userSlice";
import UserRepository from "../../../core/infrastructure/reportories/UserRepository";
import CreateUser from "../../../core/domain/users/useCases/commands/CreateUser";
const userRepository = new UserRepository();
const createUserUseCase = new CreateUser(userRepository);

export const createUser = (user) => async(dispatch) => {
    dispatch(createUserStart());
    try {
        await createUserUseCase.execute(user);
        dispatch(createUserOne(user));
    } catch (error) {
        dispatch(createUserFailure(error.toString()));
    }
};
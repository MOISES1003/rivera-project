import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../services/createUserService";

export function useCreateUser() {
  const dispatch = useDispatch();
  const createLoading = useSelector((state) => state.user.createLoading);
  const createError = useSelector((state) => state.user.createError);
  const addUser = (user) => {
    dispatch(createUser(user));
  };
  return { createLoading, createError, addUser };
}

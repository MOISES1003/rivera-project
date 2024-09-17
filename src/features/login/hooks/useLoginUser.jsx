import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../services/loginUserService";


export function useLoginUser() {
  const dispatch = useDispatch();
  const loginLoading = useSelector((state) => state.user.loading);
  const loginError = useSelector((state) => state.user.error);
  const acessUser = (user) => {
    dispatch(loginUser(user));
  };
  return { loginLoading, loginError, acessUser };
}

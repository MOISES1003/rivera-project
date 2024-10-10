import { useDispatch, useSelector } from "react-redux";

export function getMessage() {
  const dispatch = useDispatch();
  const messaSuccess = useSelector((state) => state.lens.messaSuccess);

  return { messaSuccess };
}

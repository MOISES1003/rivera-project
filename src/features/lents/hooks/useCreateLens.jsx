import { useDispatch, useSelector } from "react-redux";
import { createLens } from "../services/createLensService";


export function useCreateLens() {
  const dispatch = useDispatch();
  const createLoading = useSelector((state) => state.lens.createLoading);
  const createError = useSelector((state) => state.lens.createError);

  const addLens = (lens) => {
    dispatch(createLens(lens));
  };

  return { createLoading, createError, addLens };
}

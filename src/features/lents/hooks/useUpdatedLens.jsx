import { useDispatch, useSelector } from "react-redux";
import { updatedLens } from "../services/updatedLensService";


export function useUpdatedLens() {
  const dispatch = useDispatch();
  const updatedLoading = useSelector((state) => state.lens.updatedLoading);
  const updatedError = useSelector((state) => state.lens.updatedError);

  const updatedLensfunction = async (lens) => {
    await dispatch(updatedLens(lens));
  };

  return { updatedLoading, updatedError, updatedLensfunction };
}

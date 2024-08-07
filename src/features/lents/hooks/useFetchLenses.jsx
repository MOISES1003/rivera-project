import { useDispatch, useSelector } from "react-redux";
import { fetchLenses } from "../services/lensService";

export function useFetchLenses() {
  const dispatch = useDispatch();
  const lenses = useSelector((state) => state.lens.lenses || []);
  const loading = useSelector((state) => state.lens.loading);
  const error = useSelector((state) => state.lens.error);

  const loadLenses = () => {
    dispatch(fetchLenses());
  };

  return { lenses, loading, error, loadLenses };
}

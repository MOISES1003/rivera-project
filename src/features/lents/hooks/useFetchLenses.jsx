/* 
aqui es donde se consume el estado de lens, que viene a ser el slice 
*/
import { useDispatch, useSelector } from "react-redux";
import { fetchLenses } from "../services/fetchLensService";

export function useFetchLenses() {
  const dispatch = useDispatch();
  const lenses = useSelector((state) => state.lens.lenses || []);
  const links = useSelector((state) => state.lens.links || []);
  const pageStatic = useSelector((state) => state.lens.pageStatic);
  const loading = useSelector((state) => state.lens.loading);
  const error = useSelector((state) => state.lens.error);

  const loadLenses = () => {
    dispatch(fetchLenses(pageStatic));
  };

  return { lenses, links, loading, error, loadLenses };
}

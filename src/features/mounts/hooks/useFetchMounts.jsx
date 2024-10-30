/* 
aqui es donde se consume el estado de lens, que viene a ser el slice 
*/
import { useDispatch, useSelector } from "react-redux";
import { fetchMounts } from "../services/fetchMountsService";

export function useFetchMounts() {
  const dispatch = useDispatch();
  const mounts = useSelector((state) => state.mounts.mounts || []);
  const links = useSelector((state) => state.mounts.links || []);
  const pageStatic = useSelector((state) => state.mounts.pageStatic);
  const loading = useSelector((state) => state.mounts.loading);
  const error = useSelector((state) => state.mounts.error);
  const loadMounts= async () => {
    dispatch(fetchMounts(pageStatic));
  };

  return { mounts, links, loading, error, loadMounts };
}

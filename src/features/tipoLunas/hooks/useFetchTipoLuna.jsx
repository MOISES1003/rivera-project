/* 
aqui es donde se consume el estado de lens, que viene a ser el slice 
*/
import { useDispatch, useSelector } from "react-redux";
import { fetcheTipoLunas } from "../services/fetcheTipoLunas";

export function useFetchTipoLuna() {
  const dispatch = useDispatch();
  const tipoLunas = useSelector((state) => state.tipoLuna.tipoLunas || []);
  const loading = useSelector((state) => state.tipoLuna.loading);
  const error = useSelector((state) => state.tipoLuna.error);
  const loadTipoLunas = async () => {
    dispatch(fetcheTipoLunas());
  };

  return { tipoLunas, loading, error, loadTipoLunas };
}

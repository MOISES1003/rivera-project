/* 
aqui es donde se consume el estado de lens, que viene a ser el slice 
*/
import { useDispatch, useSelector } from "react-redux";
import { fetchStockLens } from "../services/fetchStockLensService";

export function useFechStockLens() {
  const dispatch = useDispatch();
  const stockLenses = useSelector((state) => state.lens.stockLenses || []);
  const loading = useSelector((state) => state.lens.loading);
  const error = useSelector((state) => state.lens.error);
  const loadLenses = async () => {
    dispatch(fetchStockLens());
  };

  return { stockLenses, loading, error, loadLenses };
}

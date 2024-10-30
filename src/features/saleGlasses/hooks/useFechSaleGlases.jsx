/* 
aqui es donde se consume el estado de lens, que viene a ser el slice 
*/
import { useDispatch, useSelector } from "react-redux";
import { addLunasSuccess } from "../../saleGlasses/store/saleGlassesSlice";

export function useFetchSaleGlases() {
  const dispatch = useDispatch();
  const lunas = useSelector((state) => state.saleGlasses.lunas || []);
  const monturas = useSelector((state) => state.saleGlasses.monturas || []);
  const medicamentos = useSelector((state) => state.saleGlasses.medicamentos || []);

  const addLunasSaleGlasses = async (lens) => {
    await dispatch(addLunasSuccess(lens));
  };
  return { lunas, monturas, medicamentos ,addLunasSaleGlasses};
}

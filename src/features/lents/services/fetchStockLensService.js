/*
aqui es donde se ejcuta los procesos por ejemplo para obtener los datos, 
usando el caso de uso de lentes ya creado previamente 
*/

import GetAllStockLenses from "../../../core/domain/lents/useCases/queries/GetAllStockLens";
import LensRepository from "../../../core/infrastructure/reportories/LensReporsitory";
import {
    LensesFailure,
    LensesStart,
    fetchStockLensesSuccess,
} from "../store/lensSlice";

const lensRepository = new LensRepository();
const getLensesUseCase = new GetAllStockLenses(lensRepository);
//obtener listado de los lentes
export const fetchStockLens = () => async(dispatch) => {
    dispatch(LensesStart());
    try {
        const lenses = await getLensesUseCase.execute();
        dispatch(fetchStockLensesSuccess(lenses));
    } catch (error) {
        dispatch(LensesFailure(error.toString()));
    }
};
/*
aqui es donde se ejcuta los procesos por ejemplo para obtener los datos, 
usando el caso de uso de lentes ya creado previamente 
*/

import GetLenses from "../../../core/domain/lents/useCases/queries/GetLenses";
import LensRepository from "../../../core/infrastructure/reportories/LensReporsitory";
import {
    LensesFailure,
    LensesStart,
    fetchLensesSuccess,
} from "../store/lensSlice";

const lensRepository = new LensRepository();
const getLensesUseCase = new GetLenses(lensRepository);
//obtener listado de los lentes
export const fetchLenses = (paginaEstatica) => async(dispatch) => {
    dispatch(LensesStart());
    try {
        const lenses = await getLensesUseCase.execute(paginaEstatica);
        dispatch(fetchLensesSuccess(lenses));
    } catch (error) {
        dispatch(LensesFailure(error.toString()));
    }
};
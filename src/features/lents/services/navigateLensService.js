/*
aqui es donde se ejcuta los procesos por ejemplo para obtener los datos, 
usando el caso de uso de lentes ya creado previamente 
*/
import GetNavigateLens from "../../../core/domain/lents/useCases/queries/GetNavigateLens";
import LensRepository from "../../../core/infrastructure/reportories/LensReporsitory";
import {
    LensesFailure,
    LensesStart,
    fetchLensesSuccess,
} from "../store/lensSlice";

const lensRepository = new LensRepository();
const getLensesUseCase = new GetNavigateLens(lensRepository);
//obtener listado de los lentes
export const navigateLens = (link) => async(dispatch) => {
    dispatch(LensesStart());
    try {
        const lenses = await getLensesUseCase.execute(link);
        dispatch(fetchLensesSuccess(lenses));
    } catch (error) {
        dispatch(LensesFailure(error.toString()));
    }
};
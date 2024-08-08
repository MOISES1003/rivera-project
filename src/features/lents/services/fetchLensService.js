import GetLenses from "../../../core/domain/lents/useCases/queries/GetLenses";
import LensRepository from "../../../core/infrastructure/reportories/LensReporsitory";
import {
    fetchLensesFailure,
    fetchLensesStart,
    fetchLensesSuccess,
} from "../store/lensSlice";

const lensRepository = new LensRepository();
const getLensesUseCase = new GetLenses(lensRepository);
//obtener listado de los lentes
export const fetchLenses = () => async(dispatch) => {
    dispatch(fetchLensesStart());
    try {
        const lenses = await getLensesUseCase.execute();
        dispatch(fetchLensesSuccess(lenses));
    } catch (error) {
        dispatch(fetchLensesFailure(error.toString()));
    }
};
import LensRepository from "../../../core/infrastructure/reportories/LensReporsitory";
import {
    createLensFailure,
    createLensStart,
    createLensSuccess,
    fetchLensesFailure,
    fetchLensesStart,
    fetchLensesSuccess,
} from "../store/lensSlice";

const lensRepository = new LensRepository();

//obtener listado de los lentes
export const fetchLenses = () => async(dispatch) => {
    dispatch(fetchLensesStart());
    try {
        const lenses = await lensRepository.getAll(); //aqui esta la consulta del repositorio
        dispatch(fetchLensesSuccess(lenses));
    } catch (error) {
        dispatch(fetchLensesFailure(error.toString()));
    }
};

//crear un nuevo lente
export const createLens = (lens) => async(dispatch) => {
    dispatch(createLensStart());
    try {
        const newLens = await lensRepository.create(lens);
        dispatch(createLensSuccess(newLens));
    } catch (error) {
        dispatch(createLensFailure(error.toString()));
    }
};
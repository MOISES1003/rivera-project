/*
aqui es donde se ejcuta los procesos por ejemplo para obtener los datos, 
usando el caso de uso de lentes ya creado previamente 
*/

import GetAllMounts from "../../../core/domain/mounts/useCases/queries/GetAllMounts";
import MountsRepository from "../../../core/infrastructure/reportories/MountsRepository";
import {
    MountsStart,
    fetchLensesSuccess,
    MountsFailure,
} from "../store/mountsSlice";

const lensRepository = new MountsRepository();
const getMountssesUseCase = new GetAllMounts(lensRepository);
//obtener listado de los lentes
export const fetchMounts = (paginaEstatica) => async(dispatch) => {
    dispatch(MountsStart());
    try {
        const mounts = await getMountssesUseCase.execute(paginaEstatica);
        dispatch(fetchLensesSuccess(mounts));
    } catch (error) {
        dispatch(MountsFailure(error.toString()));
    }
};
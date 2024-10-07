/*
aqui es donde se ejcuta los procesos por ejemplo para obtener los datos, 
usando el caso de uso de lentes ya creado previamente 
*/
import GetTypeLunas from "../../../core/domain/typeLunas/useCases/queries/GetTypeLunas";
import TypeLunasRepository from "../../../core/infrastructure/reportories/TypeLunasRepository";
import {
    fetchTipoLunaStart,
    fetchTipoLunaSuccess,
    fetchTipoLunaFailure,
} from "../store/tipoLunaSlice";


const Repository = new TypeLunasRepository();
const getUseCase = new GetTypeLunas(Repository);
//obtener listado de los  tipos de lentes
export const fetcheTipoLunas = () => async(dispatch) => {
    dispatch(fetchTipoLunaStart());
    try {
        const item = await getUseCase.execute();
        dispatch(fetchTipoLunaSuccess(item));
    } catch (error) {
        dispatch(fetchTipoLunaFailure(error.toString()));
    }
};
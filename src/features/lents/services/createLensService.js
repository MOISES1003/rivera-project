import CreateLens from "../../../core/domain/lents/useCases/commands/CreateLens";
import LensRepository from "../../../core/infrastructure/reportories/LensReporsitory";
import {
    createLensFailure,
    createLensStart,
    createLensSuccess,
} from "../store/lensSlice";

const lensRepository = new LensRepository();
const getLensesUseCase = new CreateLens(lensRepository);
//crear un nuevo lente
export const createLens = (lens) => async(dispatch) => {
    dispatch(createLensStart());
    try {
        const newLens = await getLensesUseCase.execute(lens);
        dispatch(createLensSuccess(newLens));
    } catch (error) {
        dispatch(createLensFailure(error.toString()));
    }
};
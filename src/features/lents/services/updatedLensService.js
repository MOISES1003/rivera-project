import UpdatedLens from "../../../core/domain/lents/useCases/commands/UpdatedLens";
import LensRepository from "../../../core/infrastructure/reportories/LensReporsitory";
import {
    LensesFailure,
    LensesStart,
    updatedLensSuccess,
} from "../store/lensSlice";

const lensRepository = new LensRepository();
const updatedensesUseCase = new UpdatedLens(lensRepository);
//crear un nuevo lente
export const updatedLens = (lens) => async(dispatch) => {
    dispatch(LensesStart());
    try {
        const editLens = await updatedensesUseCase.excute(lens);
        dispatch(updatedLensSuccess(editLens));
    } catch (error) {
        dispatch(LensesFailure(error.toString()));
    }
};
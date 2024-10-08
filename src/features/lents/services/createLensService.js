import CreateLens from "../../../core/domain/lents/useCases/commands/CreateLens";
import LensRepository from "../../../core/infrastructure/reportories/LensReporsitory";
import {
    LensesFailure,
    LensesStart,
    createLensSuccess,
} from "../store/lensSlice";

const lensRepository = new LensRepository();
const createLensesUseCase = new CreateLens(lensRepository);
//crear un nuevo lente
export const createLens = (lens) => async(dispatch) => {
    dispatch(LensesStart());
    try {
        const createdLens = await createLensesUseCase.execute(lens);
        dispatch(createLensSuccess(createdLens));
    } catch (error) {
        dispatch(LensesFailure(error.toString()));
    }
};
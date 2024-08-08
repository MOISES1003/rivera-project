import CreateLens from "../../../core/domain/lents/useCases/commands/CreateLens";
import LensRepository from "../../../core/infrastructure/reportories/LensReporsitory";
import {
    createLensFailure,
    createLensStart,
    createLensSuccess,
} from "../store/lensSlice";

const lensRepository = new LensRepository();
const createLensesUseCase = new CreateLens(lensRepository);
//crear un nuevo lente
export const createLens = (lens) => async(dispatch) => {
    dispatch(createLensStart());
    try {
        const newLens = await createLensesUseCase.execute(lens);
        console.log(newLens);
        dispatch(createLensSuccess(lens));
    } catch (error) {
        dispatch(createLensFailure(error.toString()));
    }
};
import { useDispatch, useSelector } from "react-redux";
import { openForm,closeForm } from "../store/lensSlice";


export function activeFormLens() {
  const dispatch = useDispatch();
  const isFormOpen = useSelector((state) => state.lens.active);
  const editLent = useSelector((state) => state.lens.lensToEdit);
  const handleOpenForm = (lens) => {
    dispatch(openForm(lens)); // Abrir el modal
  };

  const handleCloseForm = () => {
    dispatch(closeForm()); // Cerrar el modal
  };

  return { handleOpenForm, handleCloseForm,isFormOpen,editLent };
}

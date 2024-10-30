import { useDispatch, useSelector } from "react-redux";
import { addSelect,cleanSelect } from "../store/mountsSlice";


export function parseEditMounts() {
  const dispatch = useDispatch();
  const selectMounts = useSelector((state) => state.mounts.mountsSelect);
  const handleParseSelect = (mounts) => {
    dispatch(addSelect(mounts)); // Abrir el modal
  };

  const handleCleanSelect = () => {
    dispatch(cleanSelect()); // Cerrar el modal
  };

  return { handleParseSelect, handleCleanSelect,selectMounts };
}

/* 
aqui es donde se consume el estado de lens, que viene a ser el slice 
*/
import { useDispatch, useSelector } from "react-redux";
import { navigateLens } from "../services/navigateLensService";

export function useNavigateLenses() {
  const dispatch = useDispatch();
  const NavigateLenses = async (link) => {
    dispatch(navigateLens(link));
  };

  return {  NavigateLenses };
}

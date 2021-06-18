import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

export const useTypeSelector: TypedUseSelectorHook<RootState> =  useSelector
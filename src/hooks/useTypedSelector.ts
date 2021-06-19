import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux";
import { useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
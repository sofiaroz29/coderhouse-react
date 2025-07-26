import { useContext } from "react";
import {cartContext} from "./CartContext"


export const useCart = () => useContext(cartContext);
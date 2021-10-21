import { useContext } from "react";
import LabelsContext from "../context/LabelsContext";

export default function useLabelContext (){
    return useContext(LabelsContext)
}
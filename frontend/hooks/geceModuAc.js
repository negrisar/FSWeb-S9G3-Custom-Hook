import {useState} from "react";
import {useLocalStorage} from "../localStorageKullan.js";

const useGeceModu = (initialValue)=>{
    const [geceModu, setGeceModu] = useLocalStorage ("dark mode", initialValue);
    return [geceModu, setGeceModu];
};

export default useGeceModu;
import { useEffect, useState } from "react"

export const useCustomHook = (value) => {
    const [name , setName] = useState(value);
    const updateName = (v) => {
        setName(v)
    }
    useEffect(() => {

    } , [])
    return name;
}

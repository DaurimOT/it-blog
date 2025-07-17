import type { Button } from "@/shared/types/button.interface";

interface Props {
    button: Button
}

export default function Button({ button } : Props){
    return(
        <button>{button.name}</button>
    )
}
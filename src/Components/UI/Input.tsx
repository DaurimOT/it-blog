import type { Input } from "@/shared/types/input.interface";

interface Props {
    input: Input
}

export default function Input({ input } : Props) {
    return(
        <input type={input.type} placeholder={input.placeholder}/>
    )
}
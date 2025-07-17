import type { DescriptionType } from "@/shared/types/description.interface"


interface Props {
    description: DescriptionType,
}

export default function Description({description}: Props) {
    return(
        <p>
            {description.text}
        </p>
    )
}
import type { Image } from "@/shared/types/img.interface"

interface Props {
    img: Image,
}

export default function TegImage({img}: Props) {
    return <img src={img.src} alt={img.alt} />
}
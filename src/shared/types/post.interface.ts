import type { Image } from "@/shared/types/img.interface"
import type { SectionsHeaderType } from "@/shared/types/sections-header.interface"
import type { DescriptionType } from "@/shared/types/description.interface"


export interface PostType {
    img: Image,
    sectionHeader: SectionsHeaderType,
    description: DescriptionType,
}
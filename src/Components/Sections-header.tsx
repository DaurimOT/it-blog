import type { SectionsHeaderType } from "@/shared/types/sections-header.interface";

interface Props {
    sectionHeader: SectionsHeaderType,
}

export default function SectionsHeader({sectionHeader} : Props) {
    return(
        <div className="section_header">
            <h2>{sectionHeader.name}</h2>
        </div>
    )
}
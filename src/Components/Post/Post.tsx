import SectionsHeader from "../Sections-header";
import Description from "../Description";
import TegImage from "../UI/Image";

import './Post.css';

import type { PostType } from "@/shared/types/post.interface";

interface Props {
    post: PostType
}

export default function Post({post} : Props) {

    const {img, sectionHeader, description} = post;

    return (
        <div className="post">
            <TegImage img={img}/>
            <SectionsHeader sectionHeader={sectionHeader}/>
            <Description description={description}/>
            <div className="post_user_action">
                
            </div>
        </div>
    )
}
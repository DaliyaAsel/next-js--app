import React, { FC } from 'react';
import { PostType } from '../types';
import Heading from "./Heading";

type PostInfoProps = {
    post: PostType;
}

const PostInfo: FC<PostInfoProps> = ({ post }) => {

    const { title, body } = post || {};

    if (!post) {
        return <Heading tag='h3' text='Empty post' />
    }

    return (
        <>
                <div>
                    <strong>Title: </strong>
                    {title}
                </div>
                <div>
                    <strong>Description: </strong>
                    {`${body}` }
                </div>
        </>
    )
}

export default PostInfo;
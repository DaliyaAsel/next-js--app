import React from 'react';
import Head from 'next/head';
import Heading from '../../components/Heading';
import PostInfo from '../../components/PostInfo';

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // формируем массив путей
    const paths = data.map(({id}) => ({
        params: { id: id.toString() },
    }))

    return {
        paths,
        fallback: false,  // если возникнет ошибка, будет возвращена 404 страница.
    }
}

export const getStaticProps = async (ctx) => {
    const { id } = ctx.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { post: data }
    }
}

const Post = ({ post }) => {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading text="Post" />
            <PostInfo post={post} />
        </>
    )
}

export default Post;
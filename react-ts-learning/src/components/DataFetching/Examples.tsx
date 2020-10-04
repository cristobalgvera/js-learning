import * as React from 'react';
import {useEffect, useState} from "react";
import AxiosAPI from "../../services/AxiosAPI";

type Post = {
    id: number
    userId: number
    title: string
    body: string
}

export const Post = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        AxiosAPI.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(r => setPosts(r));
    }, []);

    const postsList = posts.map(({id, title}) => <li key={id}>{title}</li>);

    return (
        <div>
            <ul>
                {postsList}
            </ul>
        </div>
    );
};
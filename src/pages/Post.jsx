import React, { useEffect, useState } from "react";
import '../styles/App.css'
import { usePosts } from "../hooks/usePost";
import { getPageCount, getPagesArray } from "../utils/pages";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";
import PostForm from "../components/PostForm";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' })

    //Modal
    const [modal, setModal] = useState(false)
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    // let pagesArray = getPagesArray(totalPages)


    //error custom hook
    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPageCount(totalCount, limit))
    })
    //Get posts from Api
    useEffect(() => {
        fetchPosts(limit, page)
    }, [])


    const
        createPost = (newPost) => {
            setPosts([...posts, newPost])
            setModal(false)
        }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }


    return (
        <div className="App">
            <MyButton style={{ marginTop: '30px' }}
                onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter} />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
                : <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Посты про JS 1'} />
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages} />
        </div>
    );
}

export default Posts;

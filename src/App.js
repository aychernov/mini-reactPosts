import React, {useMemo, useRef, useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePost";

function App() {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({sort: '', query: ''})
    //Modal
    const [modal, setModal] = useState(false)

    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)


    const
    createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}}
                      onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Посты про JS 1'}/>
        </div>
    );
}

export default App;

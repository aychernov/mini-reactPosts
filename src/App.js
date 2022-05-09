import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'яяя', body: 'вв'},
        {id: 2, title: 'ввв', body: 'ее'},
        {id: 3, title: 'ааа', body: 'уу'}
    ]);

    const [selectedSort, setSelectedSort] = useState('')


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) =>{
        setSelectedSort(sort)
        console.log(sort)
        setPosts( [...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <div>
                <hr style={{margin: '15px 0px'}}/>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue='Сортировка по'
                    option={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}

                />
            </div>
            {posts.length
                ? <PostList remove={removePost} posts={posts} title={'Посты про JS 1'}/>
                : <h1 style={{textAlign: 'center'}}>Постов нет!</h1>
            }

        </div>
    );
}

export default App;

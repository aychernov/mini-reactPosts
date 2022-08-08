import About from "../pages/About";
import NotFoundPage from "../pages/NotFoundPage";
import Post from "../pages/Post";
import PostIdPage from "../pages/PostIdPage";

export const routes = [
	{ path: '/about', component: About, exact: false },
	{ path: '/posts', component: Post, exact: true },
	{ path: '/posts/:id', component: PostIdPage, exact: false }
]

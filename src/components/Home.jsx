import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPosting, deletePosting } from "../store/actions";
import Posts from './Posts';
import { Link } from 'react-router-dom'
import { MdAdd } from "react-icons/md";

const Home = () => {

    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const onCreate = (title, des) => dispatch(addPosting(title, des));
    const onToggle = useCallback(id => dispatch(deletePosting(id), [dispatch]));

    return (
        <main>
            <div className="homeContainer">
                <h1>POST</h1>
                <Link to="/new" className="new">
                    <MdAdd/>
                </Link>
            </div>
            <Posts posts={posts} onCreate={onCreate} onToggle={onToggle}/>
        </main>
    )
}

export default Home;
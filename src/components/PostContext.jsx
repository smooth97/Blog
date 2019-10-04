import React, { useState, createContext } from 'react'

export const PostingContext = createContext();
 
export const PostProvider = (props) => {
    const [postings, setPostings] = useState([
        {
            id: 1,
            title: 'First Post',
            date: '2019-10-04',
            action: {
                edit: false,
                delete: false
            }
        },
        {
            id: 2,
            title: 'Favorite Food',
            date: '2019-10-04',
            action: {
                edit: false,
                delete: false
            }
        },
        {
            id: 3,
            title: 'Today I Learn',
            date: '2019-10-04',
            action: {
                edit: false,
                delete: false
            }
        },
    ])
    return (
        <PostingContext.Provier>
            {props.children}
        </PostingContext.Provier>
    )
}
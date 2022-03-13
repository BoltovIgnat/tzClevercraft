import { Tag } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import './card.css';

function Filter() {
    let tags = useSelector(store => store.books.filter)

    const tagBook = tags.map((tags) => {
        return <Tag className="tags">#{tags}</Tag>
    })
    
    return (
        <div className="form">
            <div className="filter">
                <span className="filtered">Filtered by tags: </span>
                    {tagBook}
                <span className="clear" >
                    (clear)
                </span>
            </div>
        </div>
    )
}

export default Filter; 
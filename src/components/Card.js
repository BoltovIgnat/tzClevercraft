import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row, Tag } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './card.css';

function CardBook(props) {
    const dispatch = useDispatch()
	let filter = useSelector(store => store.books.filter)

    function onClickTag(e) {
        
        let clickedTag = e.target.getAttribute('ibc-tag');
        let search = window.location.search
        var arrayTags

        var arrayOfParams = search.slice(1, search.length).split('&');
        let resSearch = '?'
		arrayOfParams.forEach(function(item, i, arr) {
			var arrayOfStrings = item.split('=');
            console.log(item);
			if (arrayOfStrings[0] == 'tags') {
				arrayTags = arrayOfStrings[1].split(',');

                if (arrayTags.includes(clickedTag)){
                    
                    arrayTags = arrayTags.filter(function (tag) {
                        if(tag == clickedTag){
                            return false
                        }else{
                            return true
                        }
                    })

                } else{
                    arrayTags.push(clickedTag)
                }
                resSearch += "tags="+arrayTags.join(",")+"&";
			}else{
                resSearch += item +"&";
            }
		});
        
        resSearch = resSearch.slice(0, resSearch.length-1)
        
        window.location.replace(window.location.origin+window.location.pathname+resSearch);
    }

    const book = props.params.tags

    const tagBook = book.map((tags) => {
        return <Tag className="tags" onClick={onClickTag} ibc-tag={tags}>#{tags}</Tag>
    })
    
    const idBook = props.params.id

    function onClickStart() {
        dispatch({
            type: 'GET_IN_PROGRESS_BOOKS',
            idBook: idBook
        })
    }

    return (
        <div className="form">
            <div className="author">
                {props.params.author}
            </div>
            <div>
                <Row>
                    <Col className="title" span={12}>
                        {props.params.title}
                    </Col>
                    <Col className="phase" span={12}>
                        <span onClick={onClickStart}>start reading</span>
                        <ArrowRightOutlined />
                    </Col>
                </Row>
            </div>
            <div className="description">
                {props.params.description}
            </div>
            <div>
                {tagBook}
            </div>
        </div>
    )
}

export default CardBook; 
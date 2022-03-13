import { EnterOutlined } from "@ant-design/icons";
import { Col, Row, Tag } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import './card.css';

function CardBookDone(props) {
    const dispatch = useDispatch()

    console.log(props);
    const book = props.params.tags


    const tagBook = book.map((tags) => {
        return <Tag className="tags">#{tags}</Tag>
    })

    const idBook = props.params.id

    function onClickStart() {
        dispatch({
            type: 'GET_TO_READ_BOOKS',
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
                        <span onClick={onClickStart}>return in "to read"</span>
                        <EnterOutlined />
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

export default CardBookDone; 
import React from 'react';


const EventDetail = (props) =>{
    return(
        <div className="ui container comments">
            <div className="comment">
                <div className="content">
                    <a className="author">{props.artistname}</a>
                    <div className="metadata">
                        <span className="date">Today at {props.time}</span>
                    </div>
                    <div className="text">
                        {props.city}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
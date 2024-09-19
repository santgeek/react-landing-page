import React from "react";
import PropTypes from "prop-types";

export let Card = (props) => {
    return (
        <div className="card mx-2 mt-3">
            <img src={props.image} className="card-img-top" alt="card image" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.buttonUrl} className="btn btn-primary">
                    {props.buttonLabel}
                </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string
}
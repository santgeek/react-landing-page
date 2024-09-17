import React from "react";

let cards = [
    {
        image: "https://picsum.photos/500/325?random=1",
        title: "Great view",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        buttonUrl: "#",
        buttonLabel: "Find out more"
    },
    {
        image: "https://picsum.photos/500/325?random=2",
        title: "Grand vista",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        buttonUrl: "#",
        buttonLabel: "Find out more"
    },
    {
        image: "https://picsum.photos/500/325?random=3",
        title: "Images & more",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        buttonUrl: "#",
        buttonLabel: "Find out more"
    },
    {
        image: "https://picsum.photos/500/325?random=4",
        title: "Pics",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        buttonUrl: "#",
        buttonLabel: "Find out more"
    }
];

export let Card = () => {
    return (
        <div className="container text-center">
            <div className="row mt-3 ms-3 me-3">                
                    {cards.map((singleCard) => {
                        return (
                            <div key={singleCard.title} className="col">
                                <div className="card">
                                    <img src={singleCard.image} className="card-img-top" alt="card image" />
                                    <div className="card-body">
                                        <h5 className="card-title">{singleCard.title}</h5>
                                        <p className="card-text">{singleCard.description}</p>
                                        <a href={singleCard.buttonUrl} className="btn btn-primary">
                                            {singleCard.buttonLabel}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}                
            </div>
        </div>
        
    )
}
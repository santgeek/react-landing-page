import React from "react"

export let Wellcome = () => {
    return (
        <div>
            <div className="container-fluid mt-2">
                <div className="ms-4 me-4 bg-light ps-4 pe-4 pb-3">
                    <h1 className="display-4">{wellcomeData.title}</h1>
                    <p className="lead">{wellcomeData.description}</p>
                    <a href={wellcomeData.buttonUrl} className="btn btn-primary btn-lg mb-5" role="button">
                        {wellcomeData.buttonLabel}
                    </a>
                </div>
            </div>
        </div>
    )
}

let wellcomeData = {
    title: "A Warm Welcome!",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta reprehenderit hic laborum harum, veniam voluptatum nesciunt quisquam, reiciendis ipsam odit sunt modi. Exercitationem eveniet impedit nisi amet repellendus dolor sequi!",
    buttonUrl: "#",
    buttonLabel: "Call to action!"
}


import React from "react"

const Channel = ({data}) => {
    return (
        <div className="channel">
            <img src={data.url} alt={data.name} />
        </div>
    )
}

export default Channel
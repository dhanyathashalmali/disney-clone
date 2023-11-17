import React from "react"
import {channelList} from "../data"
import Channel from "./Channel"

const Channels = () => {
    return (
        <div className="channels">
            {channelList.map((channel, index) => {
                return <Channel data={channel} key={index} />
            })}
        </div>
    )
}

export default Channels


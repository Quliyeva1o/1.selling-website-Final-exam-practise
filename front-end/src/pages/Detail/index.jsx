import { Link, useParams } from "react-router-dom"
import { getOne } from "../../requests/requests"
import { useEffect, useState } from "react"
import { Card } from "@mui/material"

const Detail = () => {
    const { id } = useParams()
    const [myitem, setMyItem] = useState({})
    useEffect(() => {
        getOne(id).then((res) => {
            console.log(res.data);
            setMyItem(res.data)
        })
    })
    return (
        <div>
            <Card>
                <img src={myitem.img} alt="" />
                <h1>{myitem.title}</h1>
                <p>{myitem.desc}</p>
                <div>
                    
                    <Link to={`/`}>go back</Link>
                </div>
            </Card>
        </div>
    )
}

export default Detail

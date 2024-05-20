import { BaseketContext } from "../../context/ItemsCotext";
import { useContext } from "react";

const Basket = () => {
    const { basket, setBasket } = useContext(BaseketContext);
    console.log(basket);
    return (
        <>
            {basket.map((item) => {

                return (
                    <div style={{ marginTop: "50px", border: "1px solid black" }} key={item._id}>
                        <p>{item.title}</p>
                        <p>{item.desc}</p>
                        <p>{item.count}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Basket

import styles from "./index.module.scss";
import Card from '@mui/material/Card';
import { useContext } from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { del } from "../../requests/requests";
import ItemsContext, { BaseketContext } from "../../context/ItemsCotext";
const OurProducts = () => {
    const { items, setItems } = useContext(ItemsContext);
    const { basket, setBasket } = useContext(BaseketContext);

    const handleBasket = async (product) => {
        const found = basket.find((x) => x._id === product._id);
        if (found) {
            found.count += 1;
            setBasket([...basket]);
            localStorage.setItem("basket", JSON.stringify([...basket]));

        } else {
            const newItem = {
                count: 1,
                totalPrice: product.price,
                ...product
            }
            setBasket([...basket, newItem]);
            localStorage.setItem("basket", JSON.stringify([...basket, newItem]));

        }
    };



    const handleClick = (id) => {
        del(id);
        const filtered = items.filter((x) => x._id !== id);
        setItems(filtered);
    };

    return (
        <div className="container">
            <div className="textContent">
                <h2>Our Products</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
            </div>
            <div className={styles.hero}>
                {items.map((item, idx) => (
                    <Card key={idx}>
                        <img src={item.img} alt="" />
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                        <div className={styles.btns}>
                            <button onClick={() => handleBasket(item)}><ShoppingBasketIcon /></button>
                            <button onClick={() => handleClick(item._id)}>del</button>
                            <Link to={`/${item._id}`}>detail</Link>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default OurProducts;

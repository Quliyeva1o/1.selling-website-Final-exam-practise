import { createContext, useState, useEffect } from 'react';
import { GetAll } from '../requests/requests.js';
const ItemsContext = createContext('');
export const BaseketContext = createContext('');

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [basket, setBasket] = useState([]);
 useEffect(()=>{
    const local = localStorage.getItem("basket");
    if (local) {
        setBasket(JSON.parse(local));
    } else {
        localStorage.setItem("basket", JSON.stringify([]));
    }
    setBasket(JSON.parse(local))
 },[])
    
    useEffect(() => {
        GetAll()
            .then((res) => {
                setItems(res.data);
            })
            .catch((error) => {
                console.error("Error fetching items:", error);
            });
    }, []);

    return (
        <BaseketContext.Provider value={{ basket, setBasket }}>
            <ItemsContext.Provider value={{ items, setItems }}>
                {children}
            </ItemsContext.Provider>
        </BaseketContext.Provider>
    );
};

export default ItemsContext;


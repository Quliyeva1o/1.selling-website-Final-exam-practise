import { createContext, useState, useEffect } from 'react';
import { GetAll } from '../requests/requests.js';
const ItemsContext = createContext('');

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);

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
        <ItemsContext.Provider value={{ items, setItems }}>
            {children}
        </ItemsContext.Provider>
    );
};

export default ItemsContext;

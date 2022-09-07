import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Pizza = () => {
    const [pizza, setPizza] = React.useState(null);
    
    const {id} = useParams();

    const navigate = useNavigate();

    React.useEffect(() => {
        async function fetchPizza () {
            try {
                const { data } = await axios.get("https://62a43b1747e6e400638e8143.mockapi.io/items/" + id);
                setPizza(data);
            } catch (error) {
                alert("error while fetching pizza!");
                navigate('/');
            }
        }

        fetchPizza();
    }, []);

    if (!pizza) {
        return "Loading...";
    }

    return (
        <div className='container'>
            <img src={pizza.imageUrl} />
            <h2>{pizza.title}</h2>
            <h4>{pizza.price} ₽</h4>
        </div>
    )
}

export default Pizza;
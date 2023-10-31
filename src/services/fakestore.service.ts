import axios from 'axios';

export const getProducts = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const data = response.data
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }


}
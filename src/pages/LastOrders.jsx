import React from 'react';
import axios from 'axios';
import Cell from '../components/Cell';

function LastOrders() {

    const [ordersList, setOrdersList] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://62792bd2d00bded55ae56077.mockapi.io/orders');
                setOrdersList(data.reduce((prev, obj) => [...prev, ...obj.orderItems], []));
            } catch (error) {
                alert('Ошибка при запросе списка заказов :(');
                console.error(error);
            }
        })();
    }, []);

    return (
        <>
            <h1>Последние заказы всех пользователей</h1>
            <div className="disFlex">
                {ordersList.map((obj, index) => (
                    <Cell
                        key={index}
                        {...obj}
                    />))}
            </div>
        </>
    );
}

export default LastOrders;
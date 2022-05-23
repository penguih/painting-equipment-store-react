import React from 'react';
import axios from 'axios';
import Cell from '../components/Cell';

function RecentOrders() {
    const [ordersList, setOrdersList] = React.useState([]);
    const [loadingReady, setLoadingReady] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                setLoadingReady(true);
                const { data } = await axios.get('https://62792bd2d00bded55ae56077.mockapi.io/orders');

                setLoadingReady(false);
                setOrdersList(data.reduce((prev, obj) => [...prev, ...obj.orderItems], []).reverse());
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
                {(loadingReady ? [...Array(10)]
                    : ordersList).map((obj, index) => (
                        <Cell
                            key={index}
                            {...obj}
                        />))}
            </div>
        </>
    );
}

export default RecentOrders;
import React from 'react';
import axios from 'axios';
import './Order.scss';
import { useForm } from "react-hook-form";
import { useCart } from '../hooks/useCart';

function Order({ setAddCart }) {
    const { addCart, cartCost } = useCart();

    const onSendData = async (inputData) => {
        try {
            const orderData = await axios.post('https://62792bd2d00bded55ae56077.mockapi.io/orders', { orderItems: addCart, userData: inputData });
            console.log(orderData.data)
            // alert('Ваш заказ успешно оформлен!\n' + JSON.stringify(orderData.data));
            alert('Ваш заказ успешно оформлен!\n');
        } catch (error) {
            alert('Не удалось создать заказ :(');
            console.error(error);
        }
    };

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ mode: "onBlur" });

    const onSubmit = (data) => {
        onSendData(data);
        setAddCart([]);
        localStorage.setItem('Cart', JSON.stringify([]));
        reset();
    }

    return (
        <>
            <h1>Оформление заказа</h1>
            <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                <div className='inputForm'>

                    <h2>Имя:</h2>
                    <input placeholder="*Тарас" required {...register('firstName')} />

                    <h2>Фамилия:</h2>
                    <input placeholder="*Шевченко" required {...register('lastName')} />

                    <h2>Телефон:</h2>
                    <input placeholder="+38(095)123-45-67" required
                        {...register('phoneNumber', { minLength: { value: 10, message: 'Минимум 10 цифр', valueAsNumber: true } })} />
                    <div style={{ color: 'red' }}><p>{errors?.phoneNumber?.message}</p></div><p></p>

                    <h2>Почта:</h2>
                    <input type="email" placeholder="*e-mail" required {...register('email')} />

                    <h2>Город:</h2>
                    <input placeholder="*Киев" required {...register('city')} />

                    <h2>Отделение новой почты:</h2>
                    <input type='number' placeholder="*12" required {...register('novaposhta')} />

                    <h2>Комментарий к заказу:</h2>
                    <textarea placeholder="Ваши пожелания" {...register('comment')} />

                </div>
                <div className='rightSide'>
                    <div className='cardWrap'>
                        {addCart.length > 0 ?
                            <>
                                {addCart.map((obj) => ( //вивід даних товарів доданих в корзину
                                    <div key={obj.id} className="itemFlex">
                                        <div className='imgWrap'>
                                            <img height={100} width={100} src={obj.imgUrl} alt={obj.id} />
                                        </div>
                                        <div>
                                            <p>{obj.title}</p>
                                            <h6>{obj.cost} грн.</h6>
                                        </div>
                                    </div >
                                ))}
                            </>
                            : <>
                                <img className='emptyCart' src="img\emptyCart.png" alt="emptyCart" />
                                <h1> Ваша корзина пуста...</h1>
                            </>}
                    </div>

                    <p>Стоимость товаров: {cartCost} грн.</p>
                    <p>Цена доставки: {Math.round(cartCost / 100 * 2 + 20)} грн.</p>
                    <p><span>Итого: {cartCost + Math.round(cartCost / 100 * 2 + 20)} грн.</span></p>

                    <button>Подтвердить заказ</button>
                </div>
            </form>
        </>
    );
}

export default Order;
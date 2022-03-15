import React from "react";

class Order extends React.Component {
  renderOrder = (key) => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];
    const isAvailable = burger && burger.status === "available";
    if (!isAvailable) {
      return (
        <li className="unavailable" key={key}>
          Извините,{burger ? burger.name : "burger"} временно недоступен
        </li>
      );
    }
    return (
      <li key={key}>
        <span>
          <span>{count}</span>
          шт.{burger.name}
          <span>{count * burger.price} ₽</span>
          <button className="cancelItem">&times;</button>
        </span>
      </li>
    );
  };
  render() {
    const ordersId = Object.keys(this.props.order);
    const total = ordersId.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];
      const isAvailable = burger && burger.status === "available";
      if (isAvailable) {
        return prevTotal + burger.price * count;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Ваш Заказ</h2>
        <ul className="order">{ordersId.map(this.renderOrder)}</ul>
        <div className="total">
          <div className="total__wrap">
            <div className="total__wrap-final">Итого: {total} ₽ </div>
          </div>
          <div></div>
        </div>
        {total}
      </div>
    );
  }
}
export default Order;

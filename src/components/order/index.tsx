import { tw } from 'twind';
import Button from '@/components/button';
import { useState } from 'react';

type OrderInfo = {
  product: string;
  quantity: number;
  status: string;
  orderDate: string;
  deliveryDate: string;
  firstName: string;
  lastName: string;
};

const Order = () => {
  const [code, setCode] = useState('');
  const [order, setOrder] = useState<OrderInfo | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleCheckCode = async () => {
    try {
      const response = await fetch(`http://localhost:3020/orders/code/${code}`);
      if (response.ok) {
        const data: OrderInfo = await response.json();
        setOrder(data);
      } else {
        alert('Invalid code');
        setOrder(null);
      }
    } catch (error) {
      console.error('Error fetching order:', error);
      alert('Error fetching order');
      setOrder(null);
    }
  };

  return (
    <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
        <div className={tw(`mb-14 flex items-center w-full`)}>
          <img className={tw(`h-12 w-12 mr-4`)} src="mc.jpg" alt="logo" width={48} height={48} />
          <p className={tw(`text-4xl text-indigo-500 font-bold`)}>Order Information</p>
        </div>
        <div className={tw(`w-full lg:w-1/2`)}>
          <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
              <div>
                {order ? (
                  <div>
                    <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Product: {order.product}</h4>
                    <p className={tw(`text-gray-900 text-base font-bold mb-1`)}>Quantity: {order.quantity}</p>
                    <p className={tw(`text-gray-900 text-base font-bold mb-1`)}>Status: {order.status}</p>
                    <p className={tw(`text-gray-900 text-base font-bold mb-1`)}>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
                    <p className={tw(`text-gray-900 text-base font-bold mb-1`)}>Delivery Date: {new Date(order.deliveryDate).toLocaleDateString()}</p>
                    <p className={tw(`text-gray-900 text-base font-bold mb-1`)}>Customer: {order.firstName} {order.lastName}</p>
                  </div>
                ) : (
                  <p>No order information available</p>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
          <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
            <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Enter Code</h4>
            <div className={tw(`flex w-full`)}>
              <input
                aria-label="code"
                type="text"
                className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
                placeholder="Enter your Code"
                value={code}
                onChange={handleInputChange}
              />
              <Button onClick={handleCheckCode}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Order;
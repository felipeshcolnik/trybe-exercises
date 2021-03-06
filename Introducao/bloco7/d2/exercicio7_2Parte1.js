const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
// Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  console.log(`Olá ${deliveryPerson}, entrega para ${order['name']}, Telefone ${order.phoneNumber}, ${order.address.street}, Nº:${order.address.number}, AP:${order.address.apartment}`);
}


customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let deliveryPerson = order.order.delivery.deliveryPerson;
  deliveryPerson = "Luis Silva";
  let price = order.order.delivery['price'];
  price = "R$50,00";
  console.log(`Olá ${deliveryPerson}, entrega para ${order['name']}, Telefone ${order.phoneNumber}, ${order.address.street}, Nº:${order.address.number}, AP:${order.address.apartment}. Seu pedido cusou ${price}`);
  
}

orderModifier(order);
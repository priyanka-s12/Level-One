const BookDetails = ({ books }) => {
  const bookDetails = books.find(
    (book) => book.title === 'To Kill a Mockingbird'
  );
  // console.log(bookDetails);
  return (
    <div>
      <h1>Book Details</h1>
      <h2>{bookDetails.title}</h2>
      <p>
        <strong>Author: </strong>
        {bookDetails.author}
      </p>
      <p>
        <strong>Genre: </strong>
        {bookDetails.genre}
      </p>
    </div>
  );
};

const FindProduct = ({ products }) => {
  const productDetails = products.find((product) => product.id === 2);
  // console.log(productDetails);
  return (
    <div>
      <h1>Find Product</h1>
      <h2>Product Details</h2>
      {productDetails ? (
        <>
          <p>
            <strong>ID: </strong>
            {productDetails.id}
          </p>
          <p>
            <strong>Name: </strong>
            {productDetails.name}
          </p>
          <p>
            <strong>Price: </strong>${productDetails.price}
          </p>
          <p>
            <strong>Category: </strong>
            {productDetails.category}
          </p>
        </>
      ) : (
        <>
          <p>Product not found.</p>
        </>
      )}
    </div>
  );
};

const StockCount = ({ store }) => {
  const inStockProducts = store.categories.filter(
    (category) => category.itemDetail.inStock === true
  );

  // console.log(inStockProducts);
  return (
    <div>
      <h1>Store Inventory</h1>
      <h2>{store.name}</h2>
      <h3>Stock Count</h3>
      <p>Total Items in Stock: {inStockProducts.length}</p>
    </div>
  );
};

const FindOrder = ({ orders }) => {
  const orderDetails = orders.find((order) => order.customer === 'Alice Smith');
  // console.log(orderDetails);

  const productList = orderDetails.products.map((product) => (
    <li key={product.id}>
      {product.name} - Quantity: {product.quantity}
    </li>
  ));
  return (
    <div>
      <h1>Find Order</h1>
      <h2>Order Details</h2>
      <p>
        <strong>Customer: </strong>
        {orderDetails.customer}
      </p>
      <p>
        <strong>Total Amount: </strong>${orderDetails.totalAmount}
      </p>
      <p>
        <strong>Products:</strong>
      </p>
      {productList ? <ul>{productList}</ul> : <p>Product Not Found.</p>}
    </div>
  );
};

const HighCalorieFoods = ({ foods }) => {
  const filteredFoods = foods.filter((food) => food.calories >= 100);
  // console.log(filteredFoods);

  const foodDetails = filteredFoods.map((food) => (
    <div key={food.id}>
      <li>
        <strong>Name: </strong>
        {food.name}
        <br />
        <strong>Calories: </strong>
        {food.calories}
        <br />
        <strong>Category: </strong>
        {food.category}
        <br />
      </li>
    </div>
  ));
  return (
    <div>
      <h1>Food Information</h1>
      <h2>High Calorie Foods (100 Calories and Above)</h2>
      <ul>{foodDetails}</ul>
    </div>
  );
};

const AverageDistanceTraveled = ({ vehicles }) => {
  const filteredVehicles = vehicles.filter(
    (vehicle) => vehicle.name === 'Motorcycle'
  );
  // console.log(filteredVehicles);
  const totalDistanceTraveled = filteredVehicles.reduce(
    (acc, curr) => acc + curr.distance,
    0
  );

  const averageDist = totalDistanceTraveled / filteredVehicles.length;
  // console.log(totalDistanceTraveled / filteredVehicles.length);
  return (
    <div>
      <h1>Vehicles Information</h1>
      <h2>Average Distance Traveled by Motorcycles</h2>
      <p>Total number of Motorcycle vehicles: {filteredVehicles.length}</p>
      <p>
        Average distance traveled by Motorcycles: {averageDist.toFixed(2)} miles
      </p>
    </div>
  );
};

const ProductsInfo = ({ allProducts }) => {
  const productDetails = allProducts.filter(
    (product) => product.price > 10000 && product.features.isWaterProof === true
  );

  // console.log(productDetails);

  const showProducts = productDetails.map((prod) => (
    <li key={prod.id}>
      <h3>{prod.name}</h3>
      <p>Price: {prod.price}</p>
      <p>Color: {prod.features.color}</p>
      <p>Waterproof: {prod.features.isWaterProof ? 'Yes' : 'No'}</p>
    </li>
  ));
  return (
    <div>
      <h1>Product Information</h1>
      <h2>Waterproof Products with Price above 10000</h2>
      <ul>{showProducts}</ul>
    </div>
  );
};
function App() {
  const books = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
    },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    {
      id: 3,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
    },
  ];

  const products = [
    { id: 1, name: 'Keyboard', price: 50, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 20, category: 'Electronics' },
    { id: 3, name: 'Book', price: 10, category: 'Stationery' },
    { id: 4, name: 'Headphones', price: 100, category: 'Electronics' },
  ];

  const store = {
    name: 'Tech Emporium',
    categories: [
      {
        id: 1,
        name: 'Electronics',
        itemDetail: { id: 101, product: 'Laptop', inStock: true },
      },
      {
        id: 2,
        name: 'Accessories',
        itemDetail: { id: 201, product: 'Headphones', inStock: true },
      },
      {
        id: 3,
        name: 'Appliances',
        itemDetail: { id: 301, product: 'Heater', inStock: false },
      },
    ],
  };

  const orders = [
    {
      id: 1,
      customer: 'John Doe',
      totalAmount: 150,
      products: [
        { id: 101, name: 'Widget', quantity: 2 },
        { id: 102, name: 'Gadget', quantity: 1 },
      ],
    },
    {
      id: 2,
      customer: 'Alice Smith',
      totalAmount: 200,
      products: [
        { id: 103, name: 'Tool', quantity: 1 },
        { id: 104, name: 'Device', quantity: 3 },
      ],
    },
    {
      id: 3,
      customer: 'Bob Johnson',
      totalAmount: 100,
      products: [{ id: 105, name: 'Accessory', quantity: 5 }],
    },
  ];

  const foods = [
    { id: 1, name: 'Apple', calories: 52, category: 'Fruit' },
    { id: 2, name: 'Banana', calories: 89, category: 'Fruit' },
    { id: 3, name: 'Chicken Breast', calories: 165, category: 'Protein' },
    { id: 4, name: 'Salad', calories: 100, category: 'Vegetable' },
    { id: 5, name: 'Yogurt', calories: 120, category: 'Dairy' },
  ];

  const vehicles = [
    { id: 1, name: 'Car', distance: 150 },
    { id: 2, name: 'Motorcycle', distance: 45 },
    { id: 3, name: 'Bicycle', distance: 10 },
    { id: 4, name: 'Motorcycle', distance: 75 },
    { id: 5, name: 'Bicycle', distance: 50 },
    { id: 6, name: 'Motorcycle', distance: 175 },
  ];

  const allProducts = [
    {
      id: 1,
      name: 'Dell Laptop',
      price: 12000,
      features: { color: 'green', isWaterProof: false },
    },
    {
      id: 2,
      name: 'Nokia Smartphone',
      price: 8000,
      features: { color: 'blue', isWaterProof: true },
    },
    {
      id: 3,
      name: 'HP Laptop',
      price: 15000,
      features: { color: 'silver', isWaterProof: true },
    },
    {
      id: 4,
      name: 'Bose Headphones',
      price: 1500,
      features: { color: 'silver', isWaterProof: false },
    },
    {
      id: 5,
      name: 'Apple Watch',
      price: 14000,
      features: { color: 'gold', isWaterProof: true },
    },
  ];
  return (
    <main>
      <BookDetails books={books} />
      <hr />
      <FindProduct products={products} />
      <hr />
      <StockCount store={store} />
      <hr />
      <FindOrder orders={orders} />
      <hr />
      <HighCalorieFoods foods={foods} />
      <hr />
      <AverageDistanceTraveled vehicles={vehicles} />
      <hr />
      <ProductsInfo allProducts={allProducts} />
    </main>
  );
}

export default App;

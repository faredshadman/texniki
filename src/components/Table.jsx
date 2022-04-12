const Table = ({ data }) => {
  return (
    <table className="table-fixed border-2 w-full mt-4 p-4">
      <thead>
        <tr className="border-2 px-2">
          <th>Product Name</th>
          <th>Order Date</th>
          <th>Order Amount</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((product) => (
            <tr className="border-2 p-2" key={product._id}>
              <td className="border-2">{product.product[0].name}</td>
              <td className="border-2">
                {product.date.toLocaleString().substring(0, 10)}
              </td>
              <td className="border-2">{product.amount}</td>
              <td className="border-2">
                $ {`${product.amount}` * `${product.product[0].price}`}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;

export default function Product(props) {
  return (
    <div className="product-container">
      <img src={props.img} className="product-image" alt="" />
      <div className="product-desc-container">
        <h3>
          {props.brand} : {props.title}
        </h3>
        <p className="product-desc">{props.description}</p>
        Price : ${props.price}
      </div>
    </div>
  );
}

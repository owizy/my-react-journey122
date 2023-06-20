export default function Card(props){

         const darkStyle = {
          backgroundColor: props.theme ? "#000" : "white",
          color:props.theme ? "white" : "#333"

    }
   return(
    <div style={darkStyle} className="product-card">
         <span className="discount">
              {props.discount}
         </span>
          <img src={props.image} className="product-img" width="100"/>
            <div className="product-info">
                    <h3>{props.title}</h3>
                    <div className="price-box">
                           <h4>${props.new_price}</h4>
                          <h4>${props.old_price}</h4>
                    </div>
            </div>
          <p className="cart-save">
               <button> <img src={props.cart_btn}/></button>
               <button> <img src={props.save_btn}/></button>
          </p>
    </div>
   )
}
import Title from "./Title"
import Card from "./Card"
import { products } from "./products"
export default function CardContainer(props){

    const new_products = products.map((product)=>{
        return(
               <Card 
               discount={product.discount}
               title={product.title} 
               image={product.image}
               new_price={product.new_price}
               old_price={product.old_price}
               cart_btn={product.cart_btn}
               save_btn={product.save_btn}
                theme = {props.theme}
               />
        )
    })

   
    return(
        <section className="card-container">
          <Title title="Products"/>     
          <div className="card-box">
              {/* card components will be here */}

              {new_products}
          </div>
        </section>
    )
}
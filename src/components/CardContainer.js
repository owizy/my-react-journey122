import Title from "./Title"
import Card from "./Card"
import { products } from "./products"



export default function CardContainer(){


    const new_products = products.map((product)=>{
           return(
               <Card key={product.id} img_path={product.img_path} product_name = {product.product_name} price={product.price}/>
           )

    })


       return(
        <section className="card-container">
             <Title title="Products"/>
            <div className="product-box">
                {new_products }
            </div>
               
        </section>
       )
}
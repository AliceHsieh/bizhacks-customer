import React, {Component} from 'react';
import axios from 'axios';

class BestBuyAwards extends Component {

    constructor(props){
        super(props);

        this.state = {
            apiResponse: null,
        }
    }

    componentDidMount(){
        axios.get('https://bizhacks.bbycastatic.ca/mobile-si/si/v3/products/search?query=laptop&storeId=&zipCode=&facetsOnly=&platform=&lang=en')
        .then(response => {
            this.setState({
                apiResponse: response.data.searchApi.documents,                
            });

            // console.log(this.state.apiResponse)
        })
    }

    render (){
        const {apiResponse} = this.state;
console.log(apiResponse);
        return (
            <div>
                <h2>Redeemable products</h2>
                <hr/>
{
    apiResponse && 
        <div className="product-container">
        {
            apiResponse.map(product => {
                return(
                    <div className="products-card">
                        <img src={product.summary.media.primaryImage.url} alt="item" className="product-image"/>
                        <h5>{product.summary.names.short}</h5>
                        <div className="price-div">
                            <h4 style={{color: "red", margin:0}}>${product.priceBlock.itemPrice.currentPrice}</h4>
                            <p>{product.skuId}</p>
                        </div>
                        {/* <p>{product.summary.customerRatings.averageRating.score}</p> */}
                        <div className="card-shop-button">
                            <h5>SHOP NOW > </h5>
                        </div>
                    </div>
                )
            })
}
        </div>

}
            </div>
        )
    }
}

export default BestBuyAwards;
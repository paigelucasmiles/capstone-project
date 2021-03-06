import React, { useState } from 'react'
import './ProductDetail.css'
import LoadingGif from '../../gif/LoadingGif.gif'

export default function ProductDetail (props) {

    const { addItemsToCart, productData } = props

    console.log("productData", productData)


    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const [quantity, setQuantity] = useState(0)


    const productSelected = productData.find((product) => product.id === parseInt(props.match.params.id))


    const handleColorChange = (event) => {
        setColor(event.target.value)
    }
    
    const handleSizeChange = (event) => {
        setSize(event.target.value)
    }
    
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addItemsToCart(productSelected.id, color, size, quantity);
        props.history.push('/cart');
    }
    
    return (
        <>
            {
                !productSelected ? <img src={LoadingGif} alt='loading gif' /> :  <div className='row top'>
                    <div className='col-2'>
                        <img className="large" src={productSelected.image} alt='linen trousers'></img>
                    </div>
                    <div className='col-1'>
                        <div className='product-details-container'>
                            <div className='product-name-container'>
                                <h1>{productSelected.name}</h1>
                            </div>
                            <div className='product-details-price'>£ {productSelected.price}</div>
                            <div className='product-details-description'>
                                {productSelected.description}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="product-details-color">
                                    <label className='product-label'>color</label>
                                    <select name="color" value={color} onChange={handleColorChange} >
                                        <option value="white">white</option>
                                        <option value="blue">blue</option>
                                        <option value="green">green</option>
                                    </select>
                                </div>

                                <div className="product-details-size">
                                    <label className='product-label'>size</label>
                                    <select name="size" value={size} onChange={handleSizeChange}>
                                        <option value="small">small</option>
                                        <option value="medium">medium</option>
                                        <option value="large">large</option>
                                        <option value="extra large">x-large</option>
                                    </select>
                                </div>

                                <div className="product-details-quantity">
                                    <label className='product-label'>quantity</label>
                                    <select name="quantity" value={quantity} onChange={handleQuantityChange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <input id='add-to-cart' type="submit" value="ADD TO CART" />
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
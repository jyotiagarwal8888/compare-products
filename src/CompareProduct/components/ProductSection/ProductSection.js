import React from 'react';
import { ProductSectionContainer } from './ProductSection.styles';
import { useSelector } from 'react-redux';
import get from 'lodash/get';

const closeIconUrl = "https://cdnvisa.com/wp-content/uploads/2020/01/close-icon-png-images-free-transparent-image-download-pngix-close-icon-png-320_320-1.png";

const ProductSection = (props) => {
    const productIds = props.productIds;
    const productTitle = useSelector( state => get(state, 'productsInfo.productTitles', []) );
    const productImages = useSelector( state => get(state, 'productsInfo.productImages', []) );
    const productPricingImages = useSelector( state => get(state, 'productsInfo.productPricingSummary', []) );
    return (
        <>
        {
            productIds.map((id) => {
                return (
                    <ProductSectionContainer key={id}>
                        <div className="product-img">
                            <img className="prod-image" src={productImages[id]}  />
                            <img
                                className="close-icon"
                                src={closeIconUrl}
                                onClick={() => props.setproductIdsToComapre({idToAdd: 0, idToRemove: id})} />
                        </div>
                        <div className="product-title">{productTitle[id].title}</div>
                        <div className="product-price">
                            <span className="final-price">₹{productPricingImages[id].finalPrice}</span>
                            <span className="actual-price">₹{productPricingImages[id].price}</span>
                            <span className="discount">{productPricingImages[id].totalDiscount}% off</span>
                        </div>
                    </ProductSectionContainer>
                );
            })
        }
        </>
    )
};


export default ProductSection;
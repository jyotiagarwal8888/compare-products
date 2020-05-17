import React from 'react';
import { CompareProductSectionContainer } from './CompareProductSection.styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useSelector } from 'react-redux';
import get from 'lodash/get';

const CompareProductSection = (props) => {
    const productIdsToComapre = props.productIdsToComapre;
    const [product, setProduct] = React.useState('');
    const handleProductChange = (event) => {
        setProduct(event.target.value);
        props.setproductIdsToComapre({
            idToAdd: event.target.value,
            idToRemove: 0
        })
    }

    const productTitle = useSelector( state => get(state, 'productsInfo.productTitles', []) );

    const titleToShow = Object.keys(productTitle).filter(id => !productIdsToComapre.includes(id));

    return (
        <CompareProductSectionContainer>
            <div className="image-placeholder"></div>
            <div className="add-product">
                <div className="title">Add a product</div>
                <FormControl className="product-dropdown">
                    <Select
                    value={product}
                    onChange={handleProductChange}
                    displayEmpty
                    >
                        <MenuItem value="" disabled>Choose a Product</MenuItem>
                        {
                            titleToShow.map((id) => {
                                return <MenuItem key={id} value={id}>{productTitle[id].title}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </div>
        </CompareProductSectionContainer>
    )
};


export default CompareProductSection;
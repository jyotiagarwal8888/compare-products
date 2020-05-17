import React, { Component } from 'react';
import { CompareProductContainer } from './CompareProduct.styles';
import { CompareDetailSection, CompareProductSection, ProductSection, FeatureSection } from '../../components';
import { connect } from 'react-redux';
import { setFeatureList, setProdcutTitles, setProductImages, setProdcitPricingImages } from '../../actions';
import axios from 'axios';
import get from 'lodash/get';

class CompareProduct extends Component {

    constructor(props) {
        super(props);
        this.max_compare_products = 4;
        this.state = {
            productIdsToComapre: [],
            showDifferences: false
        }
    }

    setproductIdsToComapre = ({idToAdd, idToRemove}) => {
        let prodIds = this.state.productIdsToComapre;
        idToAdd && prodIds.push(idToAdd);
        if (idToRemove) {
            prodIds.length > 1 && prodIds.splice(prodIds.indexOf(idToRemove), 1);
        }
        this.setState({
            productIdsToComapre: prodIds
        });
    }

    showOnlyDifferences = (value) => {
        this.setState({
            showDifferences: value
        });
    }

    componentDidMount = () => {
        const { setFeatureList, setProdcutTitles, setProductImages, setProdcitPricingImages } = this.props;
        axios.get(`http://www.mocky.io/v2/5e9ebdaa2d00007800cb7697`).then((res) => {
            const featuresList = get(res, 'data.products.featuresList', []);
            const compareSummary = get(res, 'data.products.compareSummary', {});
            const prodcutTitles = get(compareSummary, 'titles', {});
            const productImages = get(compareSummary, 'images', {});
            const prodcitPricingImages = get(compareSummary, 'productPricingSummary', {});
            setFeatureList(featuresList);
            setProdcutTitles(prodcutTitles);
            setProductImages(productImages);
            setProdcitPricingImages(prodcitPricingImages);
            this.setState({
                productIdsToComapre: [Object.keys(prodcutTitles)[0]]
            });
        });
    }

    render() {
        const productIdsToComapre = this.state.productIdsToComapre;
        const showDifferences = get(this.state, 'showDifferences', false);
        return (
            <CompareProductContainer>
                <div className="section-1">
                    <CompareDetailSection
                        itemSelected={productIdsToComapre.length}
                        showOnlyDifferences={this.showOnlyDifferences} />
                    <ProductSection 
                        productIds={productIdsToComapre} 
                        setproductIdsToComapre={this.setproductIdsToComapre} />
                    {
                        (productIdsToComapre.length < this.max_compare_products) ?
                            <CompareProductSection
                                productIdsToComapre={productIdsToComapre} 
                                setproductIdsToComapre={this.setproductIdsToComapre} />
                        : null
                    }
                    
                </div>
                <div className="featute-section">
                    <FeatureSection
                    itemSelected={productIdsToComapre.length}
                    showDifferences={showDifferences}
                    productIdsToComapre={productIdsToComapre} />
                </div>
            </CompareProductContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setFeatureList: (t) => dispatch(setFeatureList(t)),
    setProdcutTitles: (t) => dispatch(setProdcutTitles(t)),
    setProductImages: (t) => dispatch(setProductImages(t)),
    setProdcitPricingImages: (t) => dispatch(setProdcitPricingImages(t))
});

const mapStateToProps = ({productsInfo}) => ({
    featureList: productsInfo.featuresList,
    productImages: productsInfo.productImages,
    productTitles: productsInfo.productTitles,
    productPricingSummary: productsInfo.productPricingSummary,
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareProduct);
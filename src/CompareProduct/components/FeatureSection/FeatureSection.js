import React from 'react';
import { FeatureSectionContainer } from './FeatureSection.styles';
import SubFeatureSection from './SubFeatureSection';

const MAX_COMPARE_PRODUCTS = 4;

const FeatureSection = (props) => {
    const productIdsToComapre = props.productIdsToComapre;
    const showDifferences = props.showDifferences;
    const totalProducts = props.itemSelected;
    return (
        <>
            <FeatureSectionContainer>
                <SubFeatureSection totalProducts={totalProducts} showDifferences={showDifferences} isProdHeading={true}></SubFeatureSection>
            </FeatureSectionContainer>
            {
                productIdsToComapre.map((id) => {
                    return (
                        <FeatureSectionContainer key={id}>
                            <SubFeatureSection totalProducts={totalProducts} showDifferences={showDifferences} prodId={id}></SubFeatureSection>
                        </FeatureSectionContainer>
                    );
                })
            }
            {
                (productIdsToComapre.length < MAX_COMPARE_PRODUCTS) ?
                    <FeatureSectionContainer>
                        <SubFeatureSection totalProducts={totalProducts} showDifferences={showDifferences} isEmptyContainer={true}></SubFeatureSection>
                    </FeatureSectionContainer>
                : null
            }
            
            
        </>
    )
};


export default FeatureSection;
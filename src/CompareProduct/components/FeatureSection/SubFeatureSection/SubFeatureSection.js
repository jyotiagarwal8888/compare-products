import React from 'react';
import { SubFeatureSectionContainer } from './SubFeatureSection.styles';
import { useSelector } from 'react-redux';
import get from 'lodash/get';

const SubFeatureSection = (props) => {
    const isProdHeading = props.isProdHeading;
    const isEmptyContainer = props.isEmptyContainer;
    const showDifferences = props.showDifferences;

    const featureList = useSelector( state => get(state, 'productsInfo.featuresList', []) );

    return (
        <>
            {
                featureList.map(((prodFeature, index) => {
                    const title =  isProdHeading ? prodFeature.title : "";
                    return (
                        <SubFeatureSectionContainer>
                            <div className="title">{title}</div>
                            {
                                prodFeature.features.map((feature) => {
                                    const subtitle = isProdHeading ? 
                                            feature.featureName :
                                            (isEmptyContainer ? "" : feature.values[props.prodId]);
                                    const isDifferent = get(feature, 'properties.isDifferent', true);
                                    if (showDifferences && !isDifferent && props.totalProducts > 1) {
                                        return null;
                                    }
                                    return (
                                        <div className="subtitle">{subtitle}</div>
                                    );
                                })
                            }
                        </SubFeatureSectionContainer>
                    );
                }))
            }
        </>
    )
};


export default SubFeatureSection;
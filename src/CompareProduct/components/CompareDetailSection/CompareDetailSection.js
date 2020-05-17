import React, { useRef } from 'react';
import { CompareDetailSectionContainer } from './CompareDetailSection.styles';

const CompareDetailSection = (props) => {
    const totalProductSelected = props.itemSelected;
    const checkboxRef = useRef(null);

    const handleShowDifferences = (e) => {
        const checked = checkboxRef.current.checked;
        props.showOnlyDifferences(checked)
    }
    
    return (
        <CompareDetailSectionContainer>
            <div className="heading">Compare</div>
            <div className="item-selected">{totalProductSelected} item selected</div>
            <div className="show-diff">
                <input
                    ref={checkboxRef}
                    className="show-diff-check"
                    type="checkbox"
                    onClick={handleShowDifferences} /> Show only differences
            </div>
        </CompareDetailSectionContainer>
    )
};


export default CompareDetailSection;
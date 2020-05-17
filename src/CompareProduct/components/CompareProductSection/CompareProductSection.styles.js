import styled from 'styled-components';

export const CompareProductSectionContainer = styled.div`
    position: relative;
    padding: 0px 20px;
    .image-placeholder {
        width: auto;
        height: 200px;
        background: #cccccc;
        border-radius: 4px;
        margin: 30px 0px 55px 0px;
    }
    .add-product {
        .title {
            font-weight: 600;
            font-size: 20px;
            margin-bottom: 25px;
        }
        .product-dropdown {
            width: 100%;
            .MuiInput-underline {
                &:before {
                    border-bottom: 3px solid #cccccc;
                }
                &:after {
                    border-bottom: 3px solid #cccccc;
                }
            }
            .MuiSelect-selectMenu {
                background-color: transparent;
                color: #ccc;
                font-size: 20px;
            }
        }
    }
`;
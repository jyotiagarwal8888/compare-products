import styled from 'styled-components';

export const ProductSectionContainer = styled.div`
    .product-img {
        margin-bottom: 55px;
        text-align: center;
        margin-top: 30px;
        position: relative;
        .prod-image {
            width: 200px;
        }
        .close-icon {
            width: 20px;
            position: absolute;
            top: -22px;
            padding: 5px 8px 10px 8px;
            border-radius: 50%;
            border: 2px solid #fff;
            box-shadow: 0px 2px 19px 5px #c3bfbf;
            cursor: pointer;
        }
    }
    .product-title {
        font-size: 18px;
    }
    .product-price {
        font-size: 20px;
        margin-top: 15px;
        & > span {
            margin: 0px 10px 0px 0px;
            &.final-price {
                font-weight: 600;
            }
            &.actual-price {
                text-decoration: line-through;
                color: grey;
            }
            &.discount {
                font-weight: 600;
                color: green;
            }
        }
    }
`;
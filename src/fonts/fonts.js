import { createGlobalStyle } from 'styled-components';
import NotoSansWoff from './NotoSans.woff';
import NotoSansWoff2 from './NotoSans.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'NotoSans';
        src: local('NotoSans'), local('NotoSans'),
        url(${NotoSansWoff2}) format('woff2'),
        url(${NotoSansWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
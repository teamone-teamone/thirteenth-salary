import { createGlobalStyle } from 'styled-components';
import NotoSansWoff from './NotoSans.woff';
import NotoSansWoff2 from './NotoSans.woff2';
import GongGothicBoldWoff from './GongGothicBold.woff';
import BarlowCondensedWoff from './BarlowCondensed.woff';
import BarlowCondensedWoff2 from './BarlowCondensed.woff2';



export default createGlobalStyle`
    @font-face {
        font-family: 'NotoSans';
        src: local('NotoSans'), local('NotoSans'),
        url(${NotoSansWoff2}) format('woff2'),
        url(${NotoSansWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'GongGothicBold';
        src: local('GongGothicBold'),
        url(${GongGothicBoldWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'BarlowCondensed';
        src: local('BarlowCondensed'), local('BarlowCondensed'),
        url(${BarlowCondensedWoff2}) format('woff2'),
        url(${BarlowCondensedWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;
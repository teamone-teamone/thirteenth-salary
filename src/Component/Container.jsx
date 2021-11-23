import React from 'react'
import styled from "styled-components";
import media from "styled-media-query";

const Box = styled.div`
            width: 100%;
            height: 896px;
            display: inline-block;
            text-align:center;

`


const Container = (props: {
    children: React.ReactNode
  }) => {
    return (
        <Box>
          {props.children}
        </Box>
    );
  }
  
  export default Container;
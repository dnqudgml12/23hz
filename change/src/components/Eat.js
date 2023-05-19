import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 10px solid rgba(2,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
`; 

const Eat=()=>{

    return(
        <div>
        <div>Eat</div>
        <Loading/>
        </div>
    )
}

export default Eat;
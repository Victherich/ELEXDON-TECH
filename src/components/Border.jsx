
import React from 'react'
import styled from 'styled-components'

const Border = () => {

const TopBorder = styled.div`
height:20px;
);
background-size: 400% 400%;
animation: goldGlow 15s ease infinite;
background: #12c2e9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


@keyframes goldGlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`



  return (
    <div>
      <TopBorder></TopBorder>
    </div>
  )
}

export default Border

import React from 'react';
import styled from 'styled-components';
import Roll from 'react-reveal/Roll';

export default function Title(props) {
    return (
        <TitleWrapper className="title" style={{color:props.color}}>
<Roll>
<h3 className="h2title">{props.title}</h3>
<div className="underline"></div>
</Roll>
        </TitleWrapper>
    )
}

const TitleWrapper=styled.div`
margin-bottom:10px;

.h2title{
    font-weight:300;
    text-transform:uppercase;
}
.underline{
    width:40px;
    border:1px solid;
}


`
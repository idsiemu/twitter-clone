import React from 'react';
import globalStyle from '~/constants/globalStyle';
import styled from 'styled-components/native';

const ContainerCompnent = styled.SafeAreaView`
    display: flex;
    flex: 1;
    background-color: ${globalStyle.background.color};
`;

const Container = ({...props}) => {
    return (
        <ContainerCompnent>
          {props.children}
        </ContainerCompnent>
    )
}

export default Container;

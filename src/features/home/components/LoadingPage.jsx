import styled from "styled-components"

export function LoadingPage(){
    return(
        <ContentLoading>componente</ContentLoading>
    )
}

const ContentLoading = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: red;
    left: 0;
`;
import styled from "styled-components";

export function ButtonIcons({event, Icon}){
    return(
        <Btn onClick={event} >{Icon}</Btn>
    )
}

const Btn = styled.button`

`;
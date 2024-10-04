import { useEffect, useState } from "react";
import { LoadingPage } from "../features/home/components/LoadingPage";
import styled from "styled-components";

export function HomePage() {

  return (
    <Page>
      <LoadingPage/>
      <h1>home aea</h1>
    </Page>
  );
}

const Page = styled.div`
  flex-grow: 1; /* Ocupa el espacio restante */

`;

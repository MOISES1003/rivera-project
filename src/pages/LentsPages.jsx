import styled from "styled-components";
import { LensList } from "../features/lents/components/LensList";
import { BtnAdd } from "../components/BtnAdd";
import { FormCreateLens } from "../features/lents/components/Form/FormCreateLens";
import { useState } from "react";
import { useFetchLenses } from "../features/lents/hooks/useFetchLenses";
import { Paginator } from "primereact/paginator";
import { Paginate } from "../components/Paginate";
import { useNavigateLenses } from "../features/lents/hooks/useNavigateLens";

export function LentsPage() {
  const [active, setActive] = useState(false);
  const { links, loading, error } = useFetchLenses();
  const { NavigateLenses } = useNavigateLenses();

  return (
    <ContentList>
      <ContenForm>
        {active ? <FormCreateLens /> : null}
        <BtnAdd active={active} setActive={setActive} />
      </ContenForm>
      <LensList />
      {/* <Paginator
        first={0}
        rows={links.current_page}
        totalRecords={links.last_page}
        onPageChange={onPageChange}
        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      /> */}
      <Paginate links={links} NavigationEvent={NavigateLenses} />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </ContentList>
  );
}
const ContentList = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: all 0.5s ease;
  /* overflow: hidden; */
`;
const ContenForm = styled.div`
  display: flex;
  position: absolute;
  gap: 10px;
  right: 5px;
  top: 50px;
  z-index: 20;
`;

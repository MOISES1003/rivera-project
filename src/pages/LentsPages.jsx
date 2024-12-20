import styled from "styled-components";
import { LensList } from "../features/lents/components/LensList";
import { BtnAdd } from "../components/BtnAdd";
import { FormLens } from "../features/lents/components/Form/FormLens";
import { useEffect, useRef, useState } from "react";
import { useFetchLenses } from "../features/lents/hooks/useFetchLenses";
import { Paginate } from "../components/Paginate";
import { useNavigateLenses } from "../features/lents/hooks/useNavigateLens";
import { LoadingComponent } from "../components/LoadingComponent";
import { Toast } from "primereact/toast";
import { activeFormLens } from "../features/lents/hooks/activeFormLens";
import { getMessage } from "../features/lents/hooks/getMessage";

export function LentsPage() {
  const { handleOpenForm, handleCloseForm, isFormOpen, editLent } =
    activeFormLens();
  const { messaSuccess } = getMessage();
  const toast = useRef(null);
  const { links, loading, error } = useFetchLenses();
  const { NavigateLenses } = useNavigateLenses();
  useEffect(() => {
    if (error != null) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: error,
        life: 3000, // El mensaje desaparecerá después de 3 segundos
        className: "message",
      });
    }
    if (messaSuccess != null) {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: messaSuccess,
        life: 3000,
        className: "message",
      });
    }
  }, [error, messaSuccess]); // Se ejecuta cada vez que 'error' o 'messaSuccess' cambia

  return (
    <ContentList>
      {loading && <LoadingComponent dynamicMessage="Lunas..." />}
      <ContenForm>
        {isFormOpen ? <FormLens lensToEdit={editLent} /> : null}
        <BtnAdd
          active={isFormOpen}
          funcion={isFormOpen ? handleCloseForm : handleOpenForm}
        />
      </ContenForm>
      <LensList />
      <Paginate links={links} NavigationEvent={NavigateLenses} />
      <Toast ref={toast} position="bottom-right" />
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
  padding: 5px;
  .message {
    padding: 10px;
    margin: 10px 0px;
    color: black;
    font-weight: 700;
  }
  /* height: 95%; */
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

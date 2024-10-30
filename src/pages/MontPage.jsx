import { useEffect, useRef } from "react";
import { TatableData } from "../components/TableData";
import styled from "styled-components";
import { Toast } from "primereact/toast";
import { useFetchMounts } from "../features/mounts/hooks/useFetchMounts";
import { Paginate } from "../components/Paginate";
import { LoadingComponent } from "../components/LoadingComponent";
import { FormMounts } from "../features/mounts/components/Form/FormMounts";
import { parseEditMounts } from "../features/mounts/hooks/parseEditMounts";
export function MontPage() {
  const toast = useRef(null);
  const { mounts, links, loading, error, loadMounts } = useFetchMounts();
  const { handleParseSelect } = parseEditMounts();
  const config = {
    id_montura: "id_montura",
    id_empresa: "id_empresa",
    serie: "serie",
    codigo: "codigo",
    stock: "stock",
  };
  useEffect(() => {
    loadMounts();
  }, []);

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
  }, [error]);
  return (
    <Page>
      {loading && <LoadingComponent dynamicMessage="Monturas..." />}
      <TatableData
        items={mounts}
        config={config}
        options={true}
        event={handleParseSelect}
      />
      <FormMounts />
      <Toast ref={toast} position="bottom-right" />
      <Paginate links={links} />
    </Page>
  );
}
const Page = styled.div`

  position: relative;
  flex-grow: 1;
  display: flex;

  justify-content: center;
  width: 100%;
  transition: all 0.5s ease;
  padding: 5px;
  gap: 20px;
`;

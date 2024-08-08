import { useEffect, useState } from "react";
import { useCreateLens } from "../hooks/useCreateLens";
import { useFetchLenses } from "../hooks/useFetchLenses";

export function LensList() {
  const { lenses, loading, error, loadLenses } = useFetchLenses();
  const { createLoading, createError, addLens } = useCreateLens();
  const [reload, setReload] = useState(false);
  const [newLens, setNewLens] = useState({
    codigo: "",
    nombre: "",
    serie: "",
    stock: "",
    marca: "",
  });
  useEffect(() => {
    loadLenses();
  }, []);

  const handleAddLens = () => {
    addLens(newLens);

    if (response.success) {
      setReload(!reload);
    }
    setNewLens({ codigo: "", nombre: "", serie: "", stock: "", marca: "" });
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {lenses.map((lens) => (
          <li key={lens.id_lentes}>{lens.nombre}</li>
        ))}
      </ul>
      <div>
        <h3>add New Lens</h3>
        <input
          type="text"
          value={newLens.codigo}
          onChange={(e) => setNewLens({ ...newLens, codigo: e.target.value })}
          placeholder="codigo:"
        />
        <input
          type="text"
          value={newLens.nombre}
          onChange={(e) => setNewLens({ ...newLens, nombre: e.target.value })}
          placeholder="nombre:"
        />
        <input
          type="text"
          value={newLens.serie}
          onChange={(e) => setNewLens({ ...newLens, serie: e.target.value })}
          placeholder="serie:"
        />
        <input
          type="number"
          value={newLens.stock}
          onChange={(e) =>
            setNewLens({ ...newLens, stock: parseInt(e.target.value, 10) })
          }
          placeholder="Stock:"
        />
        <input
          type="text"
          value={newLens.marca}
          onChange={(e) => setNewLens({ ...newLens, marca: e.target.value })}
          placeholder="marca:"
        />
        <button onClick={handleAddLens} disabled={createLoading}>
          {createLoading ? "Creating..." : "Add Lens"}
        </button>
        {createError && <p>Error: {createError}</p>}
      </div>
    </div>
  );
}

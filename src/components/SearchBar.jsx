import { useDispatch, useSelector } from "react-redux";
import { changeCategory, changeSearch } from "../store/accions/shopActions";

const SearchBar = () => {

  const search = useSelector((state) => state.shop.search)
  const category = useSelector((state) => state.shop.category)
  const dispactch = useDispatch();

  return (
    <div style={styles.container}>
      <label style={styles.label}>
        Categoría:
        <select
          value={category}
          onChange={(e) => dispactch(changeCategory(e.target.value))}
          style={styles.select}
        >
          <option value="Todas">Todas</option>
          <option value="Zapatos">Zapatos</option>
          <option value="Camisetas">Camisetas</option>
          <option value="Accesorios">Accesorios</option>
          <option value="Abrigos">Abrigos</option>
        </select>
      </label>
      <label style={styles.label}>
        Buscar:
        <input
          type="text"
          value={search}
          onChange={(e) => dispactch(changeSearch(e.target.value))}
          placeholder="Buscar productos..."
          style={styles.input}
        />
      </label>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "20px",
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
  },
  select: {
    padding: "5px",
    fontSize: "14px",
    marginTop: "5px",
  },
  input: {
    padding: "5px",
    fontSize: "14px",
    marginTop: "5px",
    width: "200px",
  },
};

export default SearchBar;

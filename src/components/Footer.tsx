import { CSSProperties } from "react";

export const Footer : React.FC = () => {
  const inputStyle: CSSProperties = {
    outline: "none",
    borderTop: "none",
    borderRight: "none",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    color: "white",
  };
  return (
    <nav
      className="navbar bg-dark navbar-dark py-0"
      style={{ height: "5vh" }}
    >
      <div className="container-fluid">
          <div className="col-8 col-md-4">
            <input
              className="w-100 bg-dark"
              style={inputStyle}
              placeholder="Введите название компании"
              autoComplete="off"
            />
          </div>
          <div className="offset-2 col-2 offset-md-7 col-md-1 text-center">
            <i
              className="bi bi-filter-right"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>
        </div>
    </nav>
  );
}

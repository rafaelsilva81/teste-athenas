import { Button, DataGrid } from "devextreme-react";
import { Column, Pager, Paging, Editing } from "devextreme-react/data-grid";
import { PlusCircle } from "phosphor-react";
import data from "./data/data";

function App() {
  const pageSizes = [10, 25, 50, 100];

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div className="container p-4">
      <h1> Desafio Athenas Tecnologia </h1>
      <h5>
        Desenvolvido por :{" "}
        <a href="https://github.com/rafaelsilva81">Rafael Galdino da Silva </a>
      </h5>

      <div className="mt-4">
        <DataGrid
          dataSource={data}
          showBorders={true}
          columnAutoWidth={true}
          columnHidingEnabled={true}
          showColumnLines={true}
          showRowLines={true}
          rowAlternationEnabled={true}
          allowColumnResizing={true}
          columnResizingMode="widget"
        >
          <Editing
            mode="row"
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true}
            render={({
              row,
              column,
              value,
              rowIndex,
              columnIndex,
              editingEnabled,
              deletingEnabled,
            }) => (
              <div>
                <button disabled={!editingEnabled} className="btn-primary">
                  Custom Edit
                </button>
                <button disabled={!deletingEnabled} className="btn-danger">
                  Custom Delete
                </button>
              </div>
            )}
          />

          <Column dataField="id" caption="ID" />
          <Column dataField="firstName" caption="Nome" />
          <Column dataField="lastName" caption="Sobrenome" />
          <Column dataField="gender" caption="Gênero" />
          <Column dataField="city" caption="Cidade" />
          <Column dataField="dateOfBirth" caption="Data de nascimento" />

          <Paging defaultPageSize={10} />
        </DataGrid>
      </div>
    </div>
  );
}

export default App;

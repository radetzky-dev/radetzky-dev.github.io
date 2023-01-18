import "./App.css";

function Tabella() {
  return (
    <div className="Tabella">
      <h3>Questa è una tabella</h3>
      <table id="producttable">
        <thead>
          <tr>
            <td>UPC_Code</td>
            <td>Product_Name</td>
          </tr>
        </thead>
        <tbody>
          <button>Premi</button>
        </tbody>
      </table>

      <template id="productrow">
        <tr>
          <td class="record"></td>
          <td></td>
        </tr>
      </template>
    </div>
  );
}

export default Tabella;

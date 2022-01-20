import React from "react";

import { getInvoices } from "../../data";

function Team() {
  let invoices = getInvoices();
  console.log("as");
  return (
    <div>
      {invoices.map((invoice) => (
        <div key={invoice.due}>
          {console.log(invoice.name)}
          {invoice.name}
        </div>
      ))}
      ingreso
    </div>
  );
}

export default Team;

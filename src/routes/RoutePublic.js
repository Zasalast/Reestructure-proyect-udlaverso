import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import { LoginPage } from "../pages/public/Login";
import { About } from "../pages/public/About/About";
import { Home } from "../pages/public/home";
import { Teams } from "../pages/public/Teams";
import { Expenses } from "../pages/public/expenses";
import { Invoices } from "../pages/private/Invoice/invoices";

import { Invoice } from "../pages/private/Invoice/invoice";
import { RequireAuth } from "../components/Auth/Auth";
import { Help } from "../pages/public/Help/Help";
import { ServicesOffered } from "../pages/public/servicesOffered/ServicesOffered";
import { Objetivos } from "../pages/public/Objetivos/Objetivos";
import { MisionVision } from "../pages/public/misionvision/MisionVision";
import { Metodologia } from "../pages/public/servicesOffered/Metodologia/Metodologia";
import { VideoWordBuilder } from "../pages/public/VideoWordBuilder/VideoWordBuilder";
import AccountUdlaVerso from "../pages/public/AccountUdlaVerso/AccountUdlaVerso";
import { ConfigVisor } from "../pages/public/ConfigVisor/ConfigVisor";
import { WorkWithUs } from "../pages/public/WorkWithUs/WorkWithUs";
import WhatDoWeDo from "../pages/public/WhatDoWeDo/WhatDoWeDo";
import Person from "../pages/public/Person";
import { Persons } from "../pages/public/Persons";

function RoutePublic() {
  return (
    <Routes>
      {/*routes public*/}
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="objetive" element={<Objetivos />} />
        <Route path="metodologia" element={<Metodologia />} />
        <Route path="misionvision" element={<MisionVision />} />
        <Route path="teams" element={<Teams />} />
        <Route path="services" element={<ServicesOffered />} />
        <Route path="help" element={<Help />} />
        <Route path="videowordbuilder" element={<VideoWordBuilder />} />

        <Route path="workwithus" element={<WorkWithUs />} />
        <Route path="whatdoWedo" element={<WhatDoWeDo />} />
        <Route path="accountudlaverso" element={<AccountUdlaVerso />} />
        <Route path="configvisor" element={<ConfigVisor />} />
        <Route index path="home" element={<Home />} />

        <Route path="persons" element={<Persons />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an person</p>
              </main>
            }
          />
          <Route path=":personId" element={<Person />} />
        </Route>
        
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
      </Route>
    
    </Routes>
  );
}

export { RoutePublic };

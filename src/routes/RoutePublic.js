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
        <Route path="accountudlaverso" element={<AccountUdlaVerso />} />
        <Route path="configvisor" element={<ConfigVisor />} />
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
      <Route index path="home" element={<Home />} />
    </Routes>
  );
}

export { RoutePublic };
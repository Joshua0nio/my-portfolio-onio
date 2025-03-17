"use client";
import { CSSProperties, Suspense, useEffect } from "react";
import { Refine } from "@refinedev/core";
import { cookies } from "next/headers";

import "@refinedev/antd/dist/reset.css";


import { Header } from "@components/header";



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <body>
        <Suspense>


          <div style={regBody}>  <Header />{children}</div>

        </Suspense>
      </body>
    </html >
  );
}

const regBody: CSSProperties = {
  minHeight: "400px",
  margin: "0 60px",
};

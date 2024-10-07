import React from "react";
import Head from "next/head";
import favicon from "../../../public/assets/images/brand-logos/favicon.ico";

const Seo = ({ title }: any) => {
  const i = `Accelerate Africa - ${title}`;

  return (
    <Head>
      <title>{i}</title>
      <link href={favicon.src} rel="icon"></link>
      <meta name="description" content="Accelerate Africa - Admin Dashboard" />
      <meta name="author" content="Accelerate Africa" />
      <meta
        name="keywords"
        content="Accelerate Africa dashboard, Admin dashboard, admin, next js tailwind, nextjs, typescript, tailwind nextjs, nextjs typescript, template dashboard,tailwind css, admin dashboard template, tailwind dashboard, dashboard, tailwind"
      ></meta>
    </Head>
  );
};

export default Seo;

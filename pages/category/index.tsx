import React from "react";
import Authors from "../../components/author/authors";
import Categories from "@/components/category/Category";

const index = () => {
  return (
    <div>
      <Categories />
    </div>
  );
};

index.layout = "Contentlayout";
export default index;

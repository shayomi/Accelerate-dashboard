import React, { useState, Fragment } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

interface Category {
  id: number;
  name: string;
}

interface CategoryFormProps {
  categoryData?: Category;
  onSubmit: (category: Category) => void;
}

const CategoryForm = ({ categoryData, onSubmit }: CategoryFormProps) => {
  const [category, setCategory] = useState<Category>({
    id: categoryData?.id || Date.now(),
    name: categoryData?.name || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(category);
  };

  return (
    <Fragment>
      <Seo title={categoryData ? "Edit Category" : "Create Category"} />
      <Pageheader
        currentpage={categoryData ? "Edit Category" : "Create Category"}
        activepage="Category Management"
        mainpage="Categories"
      />

      <div className="box custom-card">
        <div className="box-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category Name
              </label>
              <input
                type="text"
                id="category"
                value={category.name}
                onChange={(e) =>
                  setCategory({ ...category, name: e.target.value })
                }
                className="form-control mt-2"
                required
              />
            </div>

            <div className="mt-6">
              <button type="submit" className="ti-btn ti-btn-lg ti-btn-success">
                {categoryData ? "Update Category" : "Create Category"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

CategoryForm.layout = "Contentlayout";
export default CategoryForm;

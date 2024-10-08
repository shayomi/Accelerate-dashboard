// pages/categories/edit/[id].tsx

import { categorydata } from "@/components/category/Category";
import CategoryForm from "@/components/category/CreateCategory";
import { useRouter } from "next/router";

const EditCategory = () => {
  const router = useRouter();
  const { id } = router.query;

  const category = categorydata.find((cat) => cat.id === Number(id));

  const handleEditCategory = (updatedCategory: {
    id: number;
    name: string;
  }) => {
    console.log("Updated Category:", updatedCategory);

    router.push("/categories");
  };

  return category ? (
    <CategoryForm categoryData={category} onSubmit={handleEditCategory} />
  ) : (
    <p>Loading category data...</p>
  );
};

EditCategory.layout = "Contentlayout";
export default EditCategory;

// pages/categories/create.tsx

import CategoryForm from "@/components/category/CreateCategory";
import { useRouter } from "next/router";

const CreateCategory = () => {
  const router = useRouter();

  const handleCreateCategory = (category: { id: number; name: string }) => {
    console.log("Created Category:", category);
    router.push("/categories");
  };

  return <CategoryForm onSubmit={handleCreateCategory} />;
};

CreateCategory.layout = "Contentlayout";
export default CreateCategory;

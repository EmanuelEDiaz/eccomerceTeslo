import { ProductGrid, Title } from "@/components";
import { Categories } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

export default async function Category({
  params,
}: {
  params: Promise<{ id: Categories }>;
}) {
  const { id } = await params;

  const products = seedProducts.filter((product) => product.gender === id);
  const labels: Record<Categories, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Todos',
  }


  if (products === undefined) {
    notFound();
  }

  return (
    <>
      <Title
        title={`Articulos de ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2" />


      <ProductGrid
        products={products} />
    </>
  );
}

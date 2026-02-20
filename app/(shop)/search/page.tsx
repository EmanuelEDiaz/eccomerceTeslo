import { ProductGrid, SearchInput, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

const seedProducts = initialData.products;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();

  const products = seedProducts.filter((product) => {
    return (
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      product.type.toLowerCase().includes(query) ||
      product.gender.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <Title
        title={`Búsqueda`}
        subtitle={query ? `Resultados para "${q}"` : undefined}
        className="mb-2"
      />

      <SearchInput initialQuery={q} />

      {query ? (
        products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <IoSearchOutline className="w-20 h-20 text-gray-300 mb-5" />
            <p className="text-xl text-gray-500">
              No se encontraron resultados para{" "}
              <span className="font-bold">&quot;{q}&quot;</span>
            </p>
            <Link
              href="/"
              className="mt-5 btn-primary px-6 py-2 rounded text-white"
            >
              Volver a la tienda
            </Link>
          </div>
        )
      ) : (
        <ProductGrid products={seedProducts} />
      )}
    </>
  );
}

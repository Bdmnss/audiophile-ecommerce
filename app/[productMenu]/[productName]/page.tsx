import ProductPage from "@/pages/ProductPage";

interface Params {
  params: {
    productMenu: string;
    productName: string;
  };
}

export default function Page({ params }: Params) {
  const { productMenu, productName } = params;

  return (
    <div>
      <ProductPage productMenu={productMenu} productName={productName} />
    </div>
  );
}

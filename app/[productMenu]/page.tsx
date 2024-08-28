import ProductMenu from "@/pages/ProductMenu";

interface Params {
  params: {
    productMenu: string;
  };
}

export default function page({ params }: Params) {
  const { productMenu } = params;
  return (
    <div>
      <ProductMenu productMenuName={productMenu} />
    </div>
  );
}

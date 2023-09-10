import { ProductBox } from "@/ui/molecules";
import { type Product } from "@/ui/types";

export const ProductsList = ({ products }: { products: Product[] }) =>
	products.map((product: Product) => <ProductBox key={product.id} product={product} />);

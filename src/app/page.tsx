import { productsList } from "@/app/products.const";
import { ProductsList } from "@/ui/organisms";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-wrap justify-center gap-5 bg-slate-100 p-24">
			<ProductsList data-testid="products-list" products={productsList} />
		</main>
	);
}

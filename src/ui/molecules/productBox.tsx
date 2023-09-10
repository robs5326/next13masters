import { type Product } from "@/ui/types";
import { ProductImage, ProductDescription } from "@/ui/atoms";

export const ProductBox = ({ product }: { product: Product }) => (
	<div
		key={product.id}
		className="border-gray800 flex h-[500px] w-[300px] min-w-min max-w-sm flex-col items-center border-2 border-solid p-8"
	>
		<ProductImage image={product.image} alt={product.name} />
		<ProductDescription
			name={product.name}
			description={product.description}
			price={product.price}
		/>
	</div>
);

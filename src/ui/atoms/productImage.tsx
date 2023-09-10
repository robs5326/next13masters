export const ProductImage = ({ image, alt }: { image: string; alt: string }) => (
	<img className="aspect-square w-auto object-cover" src={image} alt={alt} />
);

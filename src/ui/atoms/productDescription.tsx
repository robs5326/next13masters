import { parsePrice } from "@/utils";

export const ProductDescription = ({
	name,
	description,
	price,
}: {
	name: string;
	description: string;
	price: number;
}) => (
	<div className="flex h-full w-full flex-col items-start pt-5 text-gray-800">
		<h2 className="text-2xl font-bold">{name}</h2>
		<p className="">{description}</p>
		<p className="mt-auto self-end text-xl">{parsePrice(price)}</p>
	</div>
);

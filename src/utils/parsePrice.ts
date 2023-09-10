export const parsePrice = (price: number): string => {
	return Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
	}).format(price);
};

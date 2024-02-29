
import TableContent from "./table";

const tableData = [
	{
		name: "NURSERY",
		fees: "₹6000",
		compositeFee: "₹2700",
		installments: "4",
		grandTotal: "₹16800",
	},
	{
		name: "LKG",
		fees: "₹6000",
		compositeFee: "₹3000",
		installments: "4",
		grandTotal: "₹18000",
	},
	{
		name: "UKG",
		fees: "₹6000",
		compositeFee: "₹3300",
		installments: "4",
		grandTotal: "₹19200",
	},
	{
		name: "I",
		fees: "₹6000",
		compositeFee: "₹3600",
		installments: "4",
		grandTotal: "₹20400",
	},
	{
		name: "II",
		fees: "₹6000",
		compositeFee: "₹3900",
		installments: "4",
		grandTotal: "₹21600",
	},
	{
		name: "III",
		fees: "₹6000",
		compositeFee: "₹4200",
		installments: "4",
		grandTotal: "₹22800",
	},
	{
		name: "IV",
		fees: "₹6000",
		compositeFee: "₹4500",
		installments: "4",
		grandTotal: "₹24000",
	},
	{
		name: "V",
		fees: "₹6000",
		compositeFee: "₹4800",
		installments: "4",
		grandTotal: "₹25200",
	},
	{
		name: "VI",
		fees: "₹6000",
		compositeFee: "₹5100",
		installments: "4",
		grandTotal: "₹26400",
	},
	{
		name: "VII",
		fees: "₹6000",
		compositeFee: "₹5400",
		installments: "4",
		grandTotal: "₹27600",
	},
	{
		name: "VIII",
		fees: "₹6000",
		compositeFee: "₹5700",
		installments: "4",
		grandTotal: "₹28800",
	},
];

function TableComponent() {
	return (
		<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
			{tableData.map((data, index) => (
				<TableContent key={index} {...data} />
			))}
		</tbody>
	);
}

export default TableComponent;

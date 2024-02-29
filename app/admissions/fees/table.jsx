
const TableContent = (props) => {
	return (
		<>
			<tr>
				<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
					{props.name}
				</td>
				<td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-800 dark:text-gray-200">
					{props.fees}
				</td>
				<td className="px-2 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-800 dark:text-gray-200">
					{props.compositeFee}
				</td>
				<td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium">
					{props.installments}
				</td>
				<td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium">
					{props.grandTotal}
				</td>
			</tr>
		</>
	);
};

export default TableContent;

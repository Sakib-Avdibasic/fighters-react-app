import Fighter from './Fighter';

const FighterList = ({ items }) => {
	return (
		<section>
			{items.map((item, index) => (
				<Fighter info={item} orderNum={index + 1} />
			))}
		</section>
	);
};

export default FighterList;

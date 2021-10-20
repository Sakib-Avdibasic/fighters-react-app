const Fighter = ({ info, orderNum }) => {
	return (
		<article className="fighter">
			<img src={info.photo} alt="Fighter" className="fighter-photo" />
			<div className="fighter-info">
				<div className="general-info">
					<h3 className="fighter-name">{info.name}</h3>
					<h3 className="record">
						{info.record.win}-{info.record.loss}
					</h3>
				</div>
				<p className="fighter-description">{info.description}</p>
			</div>
		</article>
	);
};

export default Fighter;

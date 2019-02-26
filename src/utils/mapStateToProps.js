const mapStateToProps = (state) => ({
	checkedUsers: state.checkedUsers,
	placeToGo: state.placeToGo,
	placeToAvoid: state.placeToAvoid
});

export default mapStateToProps;

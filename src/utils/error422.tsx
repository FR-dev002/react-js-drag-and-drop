const errorHandler422 = (data: [{}]) => {
	let datas = Object.entries(data);
	let errorList = {};
	for (let i = 0; i < datas.length; i++) {
		const element = datas[i];
		errorList = {...errorList, ...element};
	}
	return errorList;
};

export default errorHandler422;

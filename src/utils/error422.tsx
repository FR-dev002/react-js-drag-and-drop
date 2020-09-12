const errorHandler422 = async (data: [{}]) => {
  let datas = Object.entries(data);
  let errorList = {};
  for (let i = 0; i < datas.length; i++) {
    console.log(datas[i]);

    const element = datas[i];
    errorList = { ...errorList, ...element };
  }
  return errorList;
};

export default errorHandler422;

import axios from "axios";

export const fetchInterests = async (setNumberOfInterests, addInterest) => {
  try {
    const response = await axios.get(`api/userInfo/likeAnimal`);
    const data = response.data;
    // console.log("data: ", data, "the number of entries: ", data.length); // for test
    // data = [{ id, userAccount, animal: { id, imageUrl, ... } }, { id, userAccount, animal: { id, imageUrl, ... } }, ...] // list

    // 필요한 데이터 추출하여 스토어에 저장 => 왜 데브툴즈에서는 뜨고 콘솔 로그 찍으면 안 뜨지?????????????
    setNumberOfInterests(data.length);
    data.forEach((entry) => addInterest(entry.animal));
    // console.log("numberofInterests: ", numberOfInterests, "interestsList: ", interestsList); // for test

    return data;
  } catch (error) {
    console.error(`An error occurred while fetching the interests.`, error);
    throw error;
  }
};

export const changeInterested = async (id) => {
  try {
    const response = await axios.post(`api/userInfo/likeAnimal`, id);
    const data = response.data; // { isLiked, message }
    console.log("data: ", data); // for test

    return data.isLiked;
  } catch (error) {
    console.error(`An error occurred in changing interested on/off.`, error);
    throw error;
  }
};

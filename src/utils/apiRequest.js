import axios from "axios";

const username = process.env.REACT_APP_USERNAME;
const token = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
const repo = process.env.REACT_APP_GITHUB_REPO;

// axiosインスタンスを作成することで毎回引数に設定情報を渡さなくて良くなる
const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  auth: {
    username: username,
    password: token,
  },
});

export const fetchIssueData = async (params) => {
  try {
    const response = await axiosInstance.get(
      `/repos/${username}/${repo}/issues`,
      {
        params,
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchUser = async () => {
  try {
    const response = await axiosInstance.get("/user");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

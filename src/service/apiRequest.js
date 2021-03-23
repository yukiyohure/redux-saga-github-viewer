import axios from "axios";
import { toast } from "react-toastify";

const fullfilled = (message) => {
  toast.success(message, {
    className: "toast-success",
    hideProgressBar: true,
    autoClose: false,
    position: "top-center",
  });
};

const failed = (message) => {
  toast.error(message, {
    className: "toast-error",
    hideProgressBar: true,
    autoClose: false,
    position: "top-center",
  });
};

const username = process.env.REACT_APP_USERNAME;
const token = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
const repo = process.env.REACT_APP_GITHUB_REPO;

// axiosインスタンスを作成することで毎回引数に設定情報を渡さなくて良くなる
const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  auth: {
    username,
    password: token,
  },
});

export const fetchIssueData = async (passedParams) => {
  const date = new Date().getTime();
  try {
    const response = await axiosInstance.get(
      `/repos/${username}/${repo}/issues`,
      {
        params: {
          ...passedParams.payload,
          timestamp: date
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const createIssue = async (data) => {
  try {
    const response = await axiosInstance.post(
      `/repos/${username}/${repo}/issues`,
      data
    );
    fullfilled("issueを作成しました");
    return response.data;
  } catch (e) {
    console.log(e);
    failed("作成に失敗しました");
  }
};

export const updateIssue = async ({ data, issueNumber }) => {
  try {
    const response = await axiosInstance.patch(
      `/repos/${username}/${repo}/issues/${issueNumber}`,
      data
    );
    fullfilled("更新に成功しました");
    return response.data;
  } catch (e) {
    console.log(e);
    failed("更新に失敗しました");
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

// import { axios } from "axios";

const mockData = [
  {
    id: 1,
    title: "A bug in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Open",
    author: "yuki",
    createdAt: "01-01-2021",
    updatedAt: "01-01-2021",
  },
  {
    id: 2,
    title: "A problem of performance in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Open",
    author: "yuki",
    createdAt: "01-01-2021",
    updatedAt: "01-01-2021",
  },
  {
    id: 3,
    title: "fix layout",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Open",
    author: "yuki",
    createdAt: "01-01-2021",
    updatedAt: "01-01-2021",
  },
];

export const fetchIssueData = async () => {
  try {
    const data = new Promise(res => mockData);
    return data;
  } catch(e) {
    console.log(e);
  }
};

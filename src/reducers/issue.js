import { ADD_ISSUE, EDIT_ISSUE, DELETE_ISSUE } from "../actions";

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

const initialState = {
  index: mockData.length, // dataの長さ ≒ dataのidの値
  data: mockData, // data自体
};

const issueReducer = (state = initialState, action) => {
  const { index, data } = state; // 現在のdataのindex(要素の数)とdata(要素データ自体)を代入。

  // newIndex: 新しいstateのindexキーの中身
  // newData: 新しいstateのdataキーの中身
  const newIndex = index + 1; // indexに1を加算して'ISSUEADD'で追加する要素のためのindexを用意する。
  const newData = [...data]; // 新しいデータのための「枠」を作成(今までのデータを引き継ぐ)

  switch (action.type) {
    case ADD_ISSUE:
      // 配列の要素はindex数より1少ないので周りくどいけど -1 しておく(indexに指定してもいいけどニュアンスが一致しないからやめておく)
      newData[newData.length] = { ...action.payload, id: newIndex }; // payloadにはidは設定されていない想定なのでここでidを指定してあげる。
      return { index: newIndex, data: newData };
    case EDIT_ISSUE:
      // 配列でissueのデータを持っているので、
      newData[
        newData.findIndex((item) => {
          return item.id == action.payload.id;
        })
      ] = { ...action.payload };
      return { ...state, data: [...newData] };
    case DELETE_ISSUE:
      return {
        ...state,
        data: newData.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default issueReducer;

/**
 * original dataset
 */
export const DATA = [
  {
    id: "A",
    title: "item 1",
    created: "2022-12-03T07:22:25.911Z",
    uniqueId: 1,
  },
  {
    id: "A",
    title: "item 2",
    created: "2022-08-15T07:22:25.911Z",
    uniqueId: 2,
  },
  {
    id: "A",
    title: "item 3",
    created: "2021-07-28T07:22:25.911Z",
    uniqueId: 3,
  },
  {
    id: "A",
    title: "item 4",
    created: "2022-05-15T07:22:25.911Z",
    uniqueId: 4,
  },
  {
    id: "A",
    title: "item 5",
    created: "2021-11-07T07:22:25.911Z",
    uniqueId: 5,
  },
  {
    id: "B",
    title: "item 6",
    created: "2022-04-10T07:22:25.911Z",
    uniqueId: 6,
  },
  {
    id: "B",
    title: "item 7",
    created: "2022-12-03T07:22:25.911Z",
    uniqueId: 7,
  },
  {
    id: "B",
    title: "item 8",
    created: "2022-08-15T07:22:25.911Z",
    uniqueId: 8,
  },
  {
    id: "C",
    title: "item 9",
    created: "2021-07-28T07:22:25.911Z",
    uniqueId: 9,
  },
  {
    id: "C",
    title: "item 10",
    created: "2022-05-15T07:22:25.911Z",
    uniqueId: 10,
  },
  {
    id: "C",
    title: "item 11",
    created: "2021-11-07T07:22:25.911Z",
    uniqueId: 11,
  },
  {
    id: "C",
    title: "item 12",
    created: "2022-04-10T07:22:25.911Z",
    uniqueId: 12,
  },
  {
    id: "C",
    title: "item 13",
    created: "2022-12-03T07:22:25.911Z",
    uniqueId: 13,
  },
  {
    id: "D",
    title: "item 14",
    created: "2022-08-15T07:22:25.911Z",
    uniqueId: 14,
  },
  {
    id: "D",
    title: "item 15",
    created: "2021-07-28T07:22:25.911Z",
    uniqueId: 15,
  },
  {
    id: "D",
    title: "item 16",
    created: "2022-05-15T07:22:25.911Z",
    uniqueId: 16,
  },
  {
    id: "D",
    title: "item 17",
    created: "2021-11-07T07:22:25.911Z",
    uniqueId: 17,
  },
  {
    id: "E",
    title: "item 18",
    created: "2022-04-10T07:22:25.911Z",
    uniqueId: 18,
  },
  {
    id: "E",
    title: "item 19",
    created: "2021-11-07T07:22:25.911Z",
    uniqueId: 19,
  },
  {
    id: "E",
    title: "item 20",
    created: "2022-04-10T07:22:25.911Z",
    uniqueId: 20,
  },
];
/**
 *
 * @param a first object to compare
 * @param b second object to compare
 * @returns returns a value based on the comparison
 */
const compare = (a, b) => {
  if (a.uniqueId < b.uniqueId) return -1;
  if (a.uniqueId > b.uniqueId) return 1;
  return 0;
};

/**
 *
 * @param dataArr an array of custom objects(DATA here)
 * @returns returns an array containing arrays of object grouped by id
 */
export const groupData = (dataArr) => {
  const data = [...dataArr];
  data.sort(compare);
  let ans = [],
    temp = [];
  for (let i = 0; i < data.length; i++) {
    temp.push(data[i]);
    if (i < data.length - 1) {
      if (data[i].id !== data[i + 1].id) {
        ans.push(temp);
        temp = [];
      }
    } else ans.push(temp);
  }
  return ans;
};

export const groupedData = groupData(DATA);

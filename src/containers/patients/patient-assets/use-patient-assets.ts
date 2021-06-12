const columns = [
  { head: "Name", key: "name", width: "w-1/2" },
  { head: "Lot number", key: "number", width: "w-1/2" },
  { head: "Expiration date", key: "expiration_date", width: "w-1/4" },
];

const data = [
  {
    id: "1",
    name: "test",
    number: "123456",
    expiration_date: "2021/05/04",
  },
  {
    id: "2",
    name: "test",
    number: "123456",
    expiration_date: "2021/05/04",
  },
  {
    id: "3",
    name: "test",
    number: "123456",
    expiration_date: "2021/05/04",
  },
  {
    id: "4",
    name: "test",
    number: "123456",
    expiration_date: "2021/05/04",
  },
];

export const usePatientAssets = () => {
  return { data, columns };
};

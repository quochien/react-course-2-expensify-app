import moment from "moment";

export default [
  {
    id: "1",
    description: "Gum",
    createdAt: 0,
    amount: 195,
    note: ""
  },
  {
    id: "2",
    description: "Rent",
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf(),
    amount: 109500,
    note: ""
  },
  {
    id: "3",
    description: "Credit Card",
    createdAt: moment(0)
      .add(4, "days")
      .valueOf(),
    amount: 4500,
    note: ""
  }
];

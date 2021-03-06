import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "100",
    description: "Food",
    createdAt: moment(),
    amount: 1500,
    note: ""
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const expense = {
    description: "Food",
    createdAt: moment(),
    amount: 1500,
    note: ""
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: "1",
    updates: expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([{ id: "1", ...expense }, expenses[1], expenses[2]]);
});

test("should not edit if expense not found", () => {
  const expense = {
    description: "Food",
    createdAt: moment(),
    amount: 1500,
    note: ""
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INT" });

  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });

  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_DATE" });

  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "abc"
  });

  expect(state.text).toBe("abc");
});

test("should set start date", () => {
  const startDate = moment();
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate: startDate
  });

  expect(state.startDate).toBe(startDate);
});

test("should set end date", () => {
  const endDate = moment();
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate: endDate
  });

  expect(state.endDate).toBe(endDate);
});

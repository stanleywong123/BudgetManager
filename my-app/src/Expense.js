import React from "react";
import "./Expense.css";
import styled from "styled-components";

const ExpenseWrapper = styled.div`
  max-height: 500px;
  min-width: 100%;
  font-size: 26px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
`;
const ExpenseLabel = styled.label`
  min-width: 20%;
  padding-right: 5px;
`;
const ExpenseName = styled.input`
  min-width: 30%;
`;
const ExpenseAmount = styled.input`
  min-width: 30%;
`;
const Button = styled.button`
  min-width: auto;
  background-color: aqua;
`;
export default function Expense() {
  return (
    <ExpenseWrapper>
      <ExpenseLabel class="newExpense">
        New expense
      </ExpenseLabel>
      <ExpenseName
        type="text"
        placeholder="What did you spend money on?"
      ></ExpenseName>
      <ExpenseAmount
        type="text"
        placeholder="How much did you spend?"
      ></ExpenseAmount>
      <Button class="addNewExpense">
        Add expense
      </Button>
    </ExpenseWrapper>
  );
}

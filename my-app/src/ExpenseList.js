import React from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
  padding-left: 5px;
  max-width: 100%;
  padding-right: 5px;
`;

const ListTable = styled.table`
  max-height: 500px;
  min-width: 100%;
  border: 2px solid;
`;

const HeaderItem = styled.th`
  background-color: greenyellow;
  min-width: 50px;
  border: 1px solid;
`;

const headerItems = [
  { ListHeader: "Expense", className: "expense" },
  {
    ListHeader: "Amount Spent",
    className: "amountSpent",
  },
];
const renderHeaderItems = headerItems.map(
  (item) => {
    return (
      <HeaderItem className={item.className}>
        {item.ListHeader}
      </HeaderItem>
    );
  }
);

export default function ExpenseList() {
  return (
    <>
      <ListWrapper>
        <ListTable>{renderHeaderItems}</ListTable>
      </ListWrapper>
    </>
  );
}

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TablePlan = () => {
  return (
    <div
      className="mt-10 flex flex-col 
    items-start w-full"
    >
      <h1 className="font-semibold text-[20px]">Compare Plans</h1>
      <Table className="mt-10 border-[1px] border-[#D5D5DD] mb-10">
        <TableHeader className="bg-[#ffffff]">
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-[#F7F7F8]">
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TablePlan;

"use client";
import SettingPlan from "@/components/Settings/SettingPlan";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";
interface Props {
  Status: string;
}

const page = () => {
  return (
    <div
      className="min-h-screen flex flex-1 flex-col pl-20 
      mt-[175px] w-full bg-[#F7F7F8] pr-10 max-sm:pl-5 max-sm:pr-5"
    >
      <SettingPlan />
      <h1 className="text-[25px] mt-5">Payment History</h1>
      <div className="mt-5 max-lg:hidden">
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="border-[1px] border-[#D5D5DD]"
        >
          <TableHead>
            <TableRow>
              <TableCell
                className="uppercase 
                border-r-[1px] border-[#D5D5DD]"
              >
                Status
              </TableCell>
              <TableCell
                align="left"
                className="uppercase 
                border-r-[1px] border-[#D5D5DD]"
              >
                Transaction id
              </TableCell>
              <TableCell
                align="left"
                className="uppercase 
                border-r-[1px] border-[#D5D5DD]"
              >
                Date and Time
              </TableCell>
              <TableCell
                align="left"
                className="uppercase 
                border-r-[1px] border-[#D5D5DD]"
              >
                Amount
              </TableCell>
              <TableCell
                align="left"
                className="uppercase 
                border-r-[1px] border-[#D5D5DD]"
              >
                Details
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </div>
    </div>
  );
};

export default page;

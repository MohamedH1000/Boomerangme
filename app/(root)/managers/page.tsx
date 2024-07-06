import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Metadata } from "next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

export const metadata: Metadata = {
  title: "Managers | Boomerangme",
  description: "Managers of your account",
};
const page = () => {
  return (
    <div className="pl-20 pt-20 pr-5 max-md:pl-5">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-5">
          <h1 className="text-[30px]">Managers</h1>
          <div
            className="flex justify-center items-center 
          bg-[#d8d4d4] w-[30px] h-[30px] hover:bg-[#FFFFFF] 
          cursor-pointer duration-300 rounded-sm"
          >
            <Image
              src={"/icons/download.svg"}
              alt="download"
              width={15}
              height={10}
              className="invert-0"
            />
          </div>
        </div>
        <Link href={"/scanner-app"}>
          <div
            className="flex justify-center items-center gap-5 border-b-[1.5px]
          border-[black] cursor-pointer hover:border-none duration-300 max-md:hidden"
          >
            <svg height="20" viewBox="0 0 14 20" width="14">
              <path d="m10.5 8.35624c1.9687.20727 3.5 1.79686 3.5 3.72706v7.5c0 .2301-.1959.4167-.4375.4167s-.4375-.1866-.4375-.4167v-7.5c0-1.4693-1.1409-2.6849-2.625-2.88708v4.97048c0 .9204-.7835 1.6666-1.75 1.6666-.78132 0-1.47161-.1997-2.05766-.5995-.22287-.152-.49015-.2338-.76465-.2338-.22503 0-.40578.1241-.47017.308-.09707.2774-.03882.5477.14154.7409l3.04043 3.2576c.16053.172.14426.4354-.03633.5883-.18059.1528-.45712.1373-.61765-.0347l-2.21058-2.3684c-.02825.0054-.05749.0083-.08743.0083h-3.5c-1.208123 0-2.1875-.9327-2.1875-2.0833v-13.33337c0-1.150591.979377-2.0833295 2.1875-2.0833295l6.125-.0000005c1.20813.00000034 2.1875.932739 2.1875 2.08333zm-5.55492 8.24636c-.3883-.4161-.5137-.998-.32888-1.526.19471-.5563.70983-.9099 1.2904-.9099.47837 0 .92382.1363 1.29528.3897.43333.2956.94496.4436 1.54812.4436.48325 0 .875-.3731.875-.8333v-12.08337c0-.69035-.58762-1.249998-1.3125-1.249998h-6.125c-.72487 0-1.3125.559648-1.3125 1.249998v13.33337c0 .6903.58763 1.25 1.3125 1.25h2.81742zm-1.00758-14.10257c-.24162 0-.4375-.18655-.4375-.41667s.19588-.41666.4375-.41666h2.625c.24162 0 .4375.18654.4375.41666s-.19588.41667-.4375.41667z"></path>
            </svg>
            <p>Scanner App</p>
          </div>
        </Link>
      </div>
      <Link href={"/scanner-app"}>
        <Button
          className="md:hidden w-full bg-[black] text-white rounded-md p-3 
        flex justify-center items-center mt-5"
        >
          <svg height="20" viewBox="0 0 14 20" width="14">
            <path d="m10.5 8.35624c1.9687.20727 3.5 1.79686 3.5 3.72706v7.5c0 .2301-.1959.4167-.4375.4167s-.4375-.1866-.4375-.4167v-7.5c0-1.4693-1.1409-2.6849-2.625-2.88708v4.97048c0 .9204-.7835 1.6666-1.75 1.6666-.78132 0-1.47161-.1997-2.05766-.5995-.22287-.152-.49015-.2338-.76465-.2338-.22503 0-.40578.1241-.47017.308-.09707.2774-.03882.5477.14154.7409l3.04043 3.2576c.16053.172.14426.4354-.03633.5883-.18059.1528-.45712.1373-.61765-.0347l-2.21058-2.3684c-.02825.0054-.05749.0083-.08743.0083h-3.5c-1.208123 0-2.1875-.9327-2.1875-2.0833v-13.33337c0-1.150591.979377-2.0833295 2.1875-2.0833295l6.125-.0000005c1.20813.00000034 2.1875.932739 2.1875 2.08333zm-5.55492 8.24636c-.3883-.4161-.5137-.998-.32888-1.526.19471-.5563.70983-.9099 1.2904-.9099.47837 0 .92382.1363 1.29528.3897.43333.2956.94496.4436 1.54812.4436.48325 0 .875-.3731.875-.8333v-12.08337c0-.69035-.58762-1.249998-1.3125-1.249998h-6.125c-.72487 0-1.3125.559648-1.3125 1.249998v13.33337c0 .6903.58763 1.25 1.3125 1.25h2.81742zm-1.00758-14.10257c-.24162 0-.4375-.18655-.4375-.41667s.19588-.41666.4375-.41666h2.625c.24162 0 .4375.18654.4375.41666s-.19588.41667-.4375.41667z"></path>
          </svg>
          <p>Scanner App</p>
        </Button>
      </Link>
      <div className="flex justify-center items-center gap-4 mt-5 max-md:flex-col">
        <Select>
          <SelectTrigger className="w-2/12 max-md:w-full bg-[#FFFFFF]">
            <SelectValue placeholder="Action" />
          </SelectTrigger>
          <SelectContent className=" bg-white">
            <SelectItem value="Add">Add manager</SelectItem>
            <SelectItem value="Delete">Delete manager</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="Search" className="p-2 w-10/12 max-md:w-full" />
      </div>
      <div className="mt-5">
        <Table className="bg-[#FFFFFF] border-[#D5D5DD] border-[1px] rounded-sm">
          <TableHeader>
            <TableRow>
              <TableHead
                className="uppercase w-[50px] 
              border-r-[1px] border-[#D5D5DD] 
              flex justify-center items-center text-center"
              >
                <Checkbox />
              </TableHead>
              <TableHead className="uppercase border-r-[1px] border-[#D5D5DD]">
                user name
              </TableHead>
              <TableHead className="uppercase">created</TableHead>
              <TableHead className="uppercase">notes</TableHead>
              <TableHead className="uppercase">location</TableHead>
              <TableHead className="uppercase">status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <td colSpan="6" className="p-0">
                <Dialog>
                  <DialogTrigger className="bg-[black] text-white max-md:w-full w-full h-[40px] rounded-md mt-5">
                    Add Manager
                  </DialogTrigger>
                  <DialogContent className="bg-white h-[623px] overflow-y-scroll mt-[-8px] px-10">
                    <DialogHeader>
                      <DialogTitle>Add manager</DialogTitle>
                    </DialogHeader>
                    <form action="" className="flex flex-col items-start gap-1">
                      <label htmlFor="fullname">Full name</label>
                      <Input
                        name="fullname"
                        className="p-4 placeholder:text-[gray]"
                        placeholder="Full name"
                      />
                      <label htmlFor="email" className="mt-5">
                        Email
                      </label>
                      <Input
                        name="email"
                        className="p-4 placeholder:text-[gray]"
                        placeholder="Email"
                      />
                      <label htmlFor="phonenumber" className="mt-5">
                        Phone number
                      </label>
                      <Input
                        name="phonenumber"
                        className="p-4 placeholder:text-[gray]"
                        placeholder="Phone Number"
                        type="number"
                      />
                      <label htmlFor="password" className="mt-5">
                        Password
                      </label>
                      <Input
                        name="password"
                        className="p-4 placeholder:text-[gray]"
                        placeholder="Password"
                      />
                      <label htmlFor="repeatpassword" className="mt-5">
                        Repeat Password
                      </label>
                      <Input
                        name="repeatpassword"
                        className="p-4 placeholder:text-[gray]"
                        placeholder="Repeat Password"
                      />
                      <label htmlFor="location" className="mt-5">
                        Location Select
                      </label>
                      <Select name="location">
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder="Location Select"
                            className="placeholder:text-[gray]"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="location">
                            Your location
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <label htmlFor="notes">Notes</label>
                      <Input
                        name="notes"
                        className="p-4 placeholder:text-[gray]"
                        placeholder="Notes"
                      />
                      <div className="w-full bg-[#f7f7f8] border-[#D5D5DD] border-[1px] rounded-md p-4 flex justify-between items-center">
                        <h1>Send access to email</h1>
                        <Switch
                          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-[#e4e0e0] 
            border-[#D5D5DD] border-[1px]"
                        />
                      </div>
                      <Button className="w-full rounded-md bg-[black] text-white p-4 mt-5">
                        Add Manager
                      </Button>
                      <Button className="w-full rounded-md bg-[white] text-black p-4 mt-5 border-[1px] border-[gray]">
                        Cancel
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </td>
              {/* <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="mt-[100px] flex justify-center items-start max-md:flex-col gap-5 mb-20">
        <div className="p-4 bg-[#FFFFFF] border-[#D5D5DD] border-[1px] w-3/6 max-md:w-full relative">
          <Image
            src={"/assets/manager.png"}
            alt="Manager"
            width={50}
            height={50}
            className="absolute top-8 right-5 max-md:hidden"
          />
          <h1 className="text-[20px] font-medium">Create manager</h1>
          <p className="mt-5 w-3/6 max-md:w-full">
            Create managers to separate tracking their activity by issuing
            loyalty cards and drive loyalty program. Managers can be divided by
            sales points or by shifts.
          </p>
          <Dialog>
            <DialogTrigger className="bg-[black] text-white max-md:w-full w-3/6 h-[40px] rounded-md mt-5">
              Add Manager
            </DialogTrigger>
            <DialogContent className="bg-white h-[623px] overflow-y-scroll mt-[-8px] px-10">
              <DialogHeader>
                <DialogTitle>Add manager</DialogTitle>
              </DialogHeader>
              <form action="" className="flex flex-col items-start gap-1">
                <label htmlFor="fullname">Full name</label>
                <Input
                  name="fullname"
                  className="p-4 placeholder:text-[gray]"
                  placeholder="Full name"
                />
                <label htmlFor="email" className="mt-5">
                  Email
                </label>
                <Input
                  name="email"
                  className="p-4 placeholder:text-[gray]"
                  placeholder="Email"
                />
                <label htmlFor="phonenumber" className="mt-5">
                  Phone number
                </label>
                <Input
                  name="phonenumber"
                  className="p-4 placeholder:text-[gray]"
                  placeholder="Phone Number"
                  type="number"
                />
                <label htmlFor="password" className="mt-5">
                  Password
                </label>
                <Input
                  name="password"
                  className="p-4 placeholder:text-[gray]"
                  placeholder="Password"
                />
                <label htmlFor="repeatpassword" className="mt-5">
                  Repeat Password
                </label>
                <Input
                  name="repeatpassword"
                  className="p-4 placeholder:text-[gray]"
                  placeholder="Repeat Password"
                />
                <label htmlFor="location" className="mt-5">
                  Location Select
                </label>
                <Select name="location">
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder="Location Select"
                      className="placeholder:text-[gray]"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="location">Your location</SelectItem>
                  </SelectContent>
                </Select>
                <label htmlFor="notes">Notes</label>
                <Input
                  name="notes"
                  className="p-4 placeholder:text-[gray]"
                  placeholder="Notes"
                />
                <div className="w-full bg-[#f7f7f8] border-[#D5D5DD] border-[1px] rounded-md p-4 flex justify-between items-center">
                  <h1>Send access to email</h1>
                  <Switch
                    className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-[#e4e0e0] 
            border-[#D5D5DD] border-[1px]"
                  />
                </div>
                <Button className="w-full rounded-md bg-[black] text-white p-4 mt-5">
                  Add Manager
                </Button>
                <Button className="w-full rounded-md bg-[white] text-black p-4 mt-5 border-[1px] border-[gray]">
                  Cancel
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="p-4 bg-[#FFFFFF] border-[#D5D5DD] border-[1px] w-3/6 max-md:w-full relative">
          <Image
            src={"/assets/app.png"}
            alt="App"
            width={50}
            height={50}
            className="absolute top-8 right-5 max-md:hidden"
          />
          <h1 className="text-[20px] font-medium">Scanner app</h1>
          <p className="mt-5 w-3/6 max-md:w-full">
            The scanner app allows managers to scan and award stamps/rewards to
            customers at the point of sale. No app installation is required, as
            the scanner works directly from your mobile browser.
          </p>
          <Link href={"/scanner-app"}>
            <Button className="bg-[black] text-white max-md:w-full w-3/6 mt-20">
              Open
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

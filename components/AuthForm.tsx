"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/action/user.action";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";

const AuthForm = ({ type }: { type: string }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    password: "",
    repeatpassword: "",
    plan: "",
  });
  // console.log(userData);
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Sign up with Appwrite & create plaid token

      if (type === "sign-up") {
        try {
          await createUser(userData);
          toast({
            title: "Your account has been created successfully",
          });
        } catch (error) {
          console.log(error);
        }
      }

      if (type === "sign-in") {
        const loginData = {
          email: userData.email,
          password: userData.password,
        };
        signIn("credentials", {
          ...loginData,
          redirect: false,
        }).then((callback) => {
          setIsLoading(false);

          if (callback?.ok) {
            toast({
              title: "تم تسجيل دخول بنجاح",
            });
            router.refresh();
          }

          if (callback?.error) {
            toast({
              title: "حدثت مشكلة اثناء عملية تسجيل الدخول",
            });
          }
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link
          href="/"
          className="cursor-pointer flex items-center justify-between "
        >
          <Image
            src="/assets/logotype-light.svg"
            width={200}
            height={200}
            alt="Horizon logo"
            className="invert"
          />
        </Link>
      </header>

      <>
        <form onSubmit={handleSubmit}>
          {type === "sign-up" && (
            <>
              <label htmlFor="firstName ">First Name</label>
              <Input
                name="firstName"
                type="name"
                value={userData.firstName}
                onChange={(e: any) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
                placeholder="Enter your first name"
              />
              <div className="mt-2">
                <label htmlFor="lastName">Last Name</label>
                <Input
                  name="lastName"
                  type="name"
                  value={userData.lastName}
                  onChange={(e: any) =>
                    setUserData({ ...userData, lastName: e.target.value })
                  }
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="company">Company Name</label>
                <Input
                  name="company"
                  type="name"
                  value={userData.company}
                  onChange={(e: any) =>
                    setUserData({ ...userData, company: e.target.value })
                  }
                  placeholder="company name"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="phone">Phone Number</label>
                <Input
                  name="phone"
                  value={userData.phone}
                  onChange={(e: any) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                  type="string"
                  placeholder="Enter your phone number"
                />
              </div>
            </>
          )}
          <div className="mt-2">
            <label htmlFor="email">Email</label>
            <Input
              name="email"
              type="email"
              value={userData.email}
              onChange={(e: any) =>
                setUserData({ ...userData, email: e.target.value })
              }
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              type="password"
              value={userData.password}
              onChange={(e: any) =>
                setUserData({ ...userData, password: e.target.value })
              }
              placeholder="Enter your password"
            />
          </div>
          {type === "sign-up" && (
            <>
              <div className="mt-2">
                <label htmlFor="repeatpassword">Repeat Password</label>
                <Input
                  name="repeatpassword"
                  type="password"
                  value={userData.repeatpassword}
                  onChange={(e: any) =>
                    setUserData({ ...userData, repeatpassword: e.target.value })
                  }
                  placeholder="repeat your password"
                />
              </div>
            </>
          )}
          {type === "sign-up" && (
            <Select
              required
              onValueChange={(value) =>
                setUserData({ ...userData, plan: value })
              }
            >
              <SelectTrigger className="w-full mt-3">
                <SelectValue placeholder="Plan" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Start">Start (Trial 14 days)</SelectItem>
                <SelectItem value="Grow">Grow (Trial 14 days)</SelectItem>
                <SelectItem value="Business">
                  Business (Trial 14 days)
                </SelectItem>
              </SelectContent>
            </Select>
          )}

          <div className="flex flex-col gap-4 mt-4">
            <Button type="submit" disabled={isLoading} className="form-btn">
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> &nbsp;
                  Loading...
                </>
              ) : type === "sign-in" ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </Button>
          </div>
        </form>

        <footer className="flex justify-center gap-1">
          <p className="text-14 font-normal text-gray-600">
            {type === "sign-in"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Link
            href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            className="form-link"
          >
            {type === "sign-in" ? "Sign up" : "Sign in"}
          </Link>
        </footer>
      </>
    </section>
  );
};

export default AuthForm;

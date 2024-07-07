"use server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function createUser(userData: any) {
  try {
    const {
      firstName,
      lastName,
      company,
      phone,
      email,
      password,
      repeatpassword,
      plan,
    } = userData;
    if (password !== repeatpassword) {
      return Error("password and repeat password should match");
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        company,
        phone,
        email,
        hashedPassword,
        plan,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) return null;

    return currentUser;
  } catch (error: any) {
    return null;
  }
}

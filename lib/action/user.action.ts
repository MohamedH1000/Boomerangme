"use server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { revalidatePath } from "next/cache";

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
export async function editUser(personalData: any) {
  const currentUser = await getCurrentUser();
  const id = currentUser?.id;
  try {
    const {
      firstName,
      lastName,
      company,
      email,
      phone,
      image,
      language,
      dateFormat,
      password,
      repeatPassword,
      country,
      timeZone,
      currency,
    } = personalData;
    if (password !== repeatPassword && password) {
      return Error("password and repeat password should match");
    }

    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 12);
    } else {
      hashedPassword = currentUser?.hashedPassword;
    }

    const user = await prisma.user.update({
      where: { id },
      data: {
        firstName,
        lastName,
        company,
        email,
        phone,
        image,
        language,
        dateFormat,
        hashedPassword,
        country,
        timeZone,
        currency,
      },
    });
    revalidatePath("/settings/personal");
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

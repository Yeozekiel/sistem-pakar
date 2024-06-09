"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const GejalaSchema = z.object({
    kode_gejala: z.string().startsWith("G").and(z.string().min(4).max(4)),
    gejala: z.string(),
})

export const saveGejala = async (prevState: any, formData: FormData) => {
    const validatedFields = GejalaSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!validatedFields.success) {
        return{
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.gejala.create({
            data:{
                kode_gejala: validatedFields.data.kode_gejala,
                gejala: validatedFields.data.gejala
            }
        })
    } catch (error) {
        return {message: "Failed to create gejala"}
    }

    revalidatePath("/gejala");
    redirect("/gejala");
}

export const deleteGejala = async (id: number) => {
    try {
      await prisma.gejala.delete({
        where: { id },
      });
    } catch (error) {
      return { message: "Failed to delete gejala" };
    }
  
    revalidatePath("/gejala");
  };
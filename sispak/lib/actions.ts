"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const GejalaSchema = z.object({
    kode_gejala: z.string().startsWith("G").and(z.string().min(4).max(4)),
    gejala: z.string(),
})

const TingkatDepresiSchema = z.object({
    kode_depresi: z.string().startsWith("P").and(z.string().min(4).max(4)),
    depresi: z.string()
})

const CFSchema = z.object({
    nilai: z.number().min(-1).max(1)
})

const KeputusanSchema = z.object({
    kode_gejala: z.string().startsWith("G").and(z.string().min(4).max(4)),
    kode_depresi: z.string().startsWith("P").and(z.string().min(4).max(4)),
    mb: z.number(),
    md: z.number()
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

export const saveTingkatDepresi = async (prevState: any, formData: FormData) => {
    const validatedFields = TingkatDepresiSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!validatedFields.success) {
        return{
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.tingkat_depresi.create({
            data:{
                kode_depresi: validatedFields.data.kode_depresi,
                depresi: validatedFields.data.depresi
            }
        })
    } catch (error) {
        return {message: "Failed to create depresi"}
    }

    revalidatePath("/tingkat_depresi");
    redirect("/tingkat_depresi");
}

export const saveKeputusan = async (prevState: any, formData: FormData) => {
    const validatedFields = KeputusanSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!validatedFields.success) {
        return{
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.keputusan.create({
            data:{
                kode_gejala: validatedFields.data.kode_gejala,
                kode_depresi: validatedFields.data.kode_depresi,
                mb: validatedFields.data.mb,
                md: validatedFields.data.md
            }
        })
    } catch (error) {
        return {message: "Failed to create keputusan"}
    }

    revalidatePath("/tingkat_keputusan");
    redirect("/tingkat_keputusan");
}

export const updateCF = async (id: number, prevState: any, formData: FormData) => {
    const validatedFields = CFSchema.safeParse(parseFloat(Object.fromEntries(formData.entries())));

    if(!validatedFields.success) {
        return{
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.kondisi_users.update({
            data:{
                nilai: validatedFields.data.nilai
            },
            where: {id}
        })
    } catch (error) {
        return {message: "Nilai CF gagal disimpan"}
    }
    
    revalidatePath("/cf");
    redirect("/cf");
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

  export const deleteTingkatDepresi = async (id: number) => {
    try {
      await prisma.tingkat_depresi.delete({
        where: { id },
      });
    } catch (error) {
      return { message: "Failed to delete tingkat_depresi" };
    }
  
    revalidatePath("/tingkat_depresi");
  };
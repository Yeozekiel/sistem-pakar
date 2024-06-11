import {prisma} from "../lib/prisma";

export const getGejala = async () => {
    try {
        const gejala = await prisma.gejala.findMany();
        return gejala;
    } catch (error) {
        throw new Error("Failed to fetch gejala data");
    }
}

export const getTingkatDepresi = async () => {
    try {
        const tingkat_depresi = await prisma.tingkat_depresi.findMany();
        return tingkat_depresi;
    } catch (error) {
        throw new Error("Failed to fetch tingkat_depresi data");
    }
}

export const getCF = async () => {
    try {
        const cf = await prisma.kondisi_users.findMany();
        return cf;
    } catch (error) {
        throw new Error("Failed to fetch cf data");
    }
}

export const getCFById = async (id: number) => {
    try {
        const cf = await prisma.kondisi_users.findUnique({
            where: {id}
        });
        return cf;
    } catch (error) {
        throw new Error("Failed to fetch cf data");
    }
}

export const getKeputusan = async () => {
    try {
        const keputusan = await prisma.keputusan.findMany();
        return keputusan;
    } catch (error) {
        throw new Error("Failed to fetch keputusan data");
    }
}
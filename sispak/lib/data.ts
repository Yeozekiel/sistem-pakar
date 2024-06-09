import {prisma} from "../lib/prisma";

export const getGejala = async () => {
    try {
        const gejala = await prisma.gejala.findMany();
        return gejala;
    } catch (error) {
        throw new Error("Failed to fetch gejala data");
    }
}
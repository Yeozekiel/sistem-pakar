"use client";

import { error } from "console";
import { saveGejala, saveTingkatDepresi, saveKeputusan } from "../lib/actions";
import { useFormState } from "react-dom";

export const CreateFormGejala = () => {
    const [state, formAction] = useFormState(saveGejala, null);
    return (
        <div>
            <form action={formAction}>
                <div className="mb-5">
                    <label 
                        htmlFor="kode_gejala" 
                        className="block text-sm font-medium text-gray-900"
                        >
                            Kode Gejala
                        </label>
                    <input 
                        type="text" 
                        name="kode_gejala" 
                        id="kode_gejala" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Kode Gejala..."
                    />
                    <div id="kode_gejala-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.kode_gejala}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="gejala" 
                        className="block text-sm font-medium text-gray-900"
                        >
                            Gejala
                        </label>
                    <input 
                        type="text" 
                        name="gejala" 
                        id="gejala" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Gejala..."
                    />
                    <div id="gejala-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.gejala}</p>
                    </div>
                </div>
                <div id="message-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                    </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">Save</button>
            </form>
        </div>
    )
}

export const CreateFormTingkatDepresi = () => {
    const [state, formAction] = useFormState(saveTingkatDepresi, null);
    return (
        <div>
            <form action={formAction}>
                <div className="mb-5">
                    <label 
                        htmlFor="kode_depresi" 
                        className="block text-sm font-medium text-gray-900"
                        >
                            Kode Tingkat Depresi
                        </label>
                    <input 
                        type="text" 
                        name="kode_depresi" 
                        id="kode_depresi" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Kode Depresi..."
                    />
                    <div id="kode_depresi-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.kode_depresi}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="depresi" 
                        className="block text-sm font-medium text-gray-900"
                        >
                            Depresi
                        </label>
                    <input 
                        type="text" 
                        name="depresi" 
                        id="depresi" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Depresi..."
                    />
                    <div id="depresi-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.depresi}</p>
                    </div>
                </div>
                <div id="message-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                    </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">Save</button>
            </form>
        </div>
    )
}

export const CreateFormKeputusan = () => {
    const [state, formAction] = useFormState(saveKeputusan, null);
    return (
        <div>
            <form action={formAction}>
                <div className="mb-5">
                    <label 
                        htmlFor="kode_gejala" 
                        className="block text-sm font-medium text-gray-900"
                        >
                            Kode Gejala
                        </label>
                    <input 
                        type="text" 
                        name="kode_gejala" 
                        id="kode_gejala" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Kode Gejala..."
                    />
                    <div id="kode_gejala-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.kode_gejala}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="kode_depresi" 
                        className="block text-sm font-medium text-gray-900"
                        >
                            Kode Tingkat Depresi
                        </label>
                    <input 
                        type="text" 
                        name="kode_depresi" 
                        id="kode_depresi" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Kode Depresi..."
                    />
                    <div id="kode_depresi-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.kode_depresi}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="measure_of_belief" 
                        className="block text-sm font-medium text-gray-900"
                        >
                            Measure of Belief
                        </label>
                    <input 
                        type="number" 
                        name="measure_of_belief" 
                        id="measure_of_belief" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Measure of Belief..."
                    />
                    <div id="measure_of_belief-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.mb}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="measure_of_disbelief" 
                        className="block text-sm font-medium text-gray-900"
                        >
                            Measure of Disbelief
                        </label>
                    <input 
                        type="number" 
                        name="measure_of_disbelief" 
                        id="measure_of_disbelief" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Measure of Disbelief..."
                    />
                    <div id="measure_of_disbelief-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.md}</p>
                    </div>
                </div>
                <div id="message-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                    </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">Save</button>
            </form>
        </div>
    )
}
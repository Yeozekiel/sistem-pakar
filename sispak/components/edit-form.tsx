"use client";
import { useFormState } from "react-dom";
import type { kondisi_users } from "@prisma/client";
import { updateCF } from "../lib/actions";

export const UpdateFormCF = ({cf}: {cf: kondisi_users}) => {
        const UpdateCFScore = updateCF.bind(null, cf.nilai);
    const [state, formAction] = useFormState(UpdateCFScore, null);
    return (
        <div>
            <form action={formAction}>
                <div className="mb-5">
                    <label 
                        htmlFor="nilai" 
                        className="block text-sm font-medium text-gray-900"
                        >
                            Update Nilai {cf.kondisi}
                        </label>
                    <input 
                        type="float"
                        name="nilai" 
                        id="nilai" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Nilai CF..."
                        defaultValue={cf.nilai}
                    />
                    <div id="nilai-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.nilai}</p>
                    </div>
                </div>
                <div id="message-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                    </div>
                <button type="update" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">Update</button>
            </form>
        </div>
    )
}

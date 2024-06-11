"use client"

import Link from "next/link"
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5"
import { useFormStatus } from "react-dom";
import { deleteGejala, deleteTingkatDepresi } from "../lib/actions";
// import clsx from "clsx";

export const CreateButton = ({href}) => {
    return (
        <Link 
        href={href}
        className="inline-flex items-center space-x-1 text-white
        bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
        >
            <IoAddSharp size={20}/>
            Create
        </Link>
    );
};

export const EditButtonCF = ({id}: {id:number}) => {
    return (
        <Link 
        href={`/cf/edit/${id}`}
        className="rounded-sm border p-1 hover:bg-gray-100"
        >
            <IoPencil size={20}/>
        </Link>
    );
};


export const DeleteGejalaButton = ({id}: {id:number}) => {
    const DeleteGejalaWithId = deleteGejala.bind(null, id); 
    return (
        <form action={DeleteGejalaWithId}>
            <button className="rounded-sm border p-1 hover:bg-gray-100">
                <IoTrashOutline size={20}/>
            </button>
        </form>

    );
};

export const DeleteTingkatDepresiButton = ({id}: {id:number}) => {
    const DeleteTingkatDepresiWithId = deleteTingkatDepresi.bind(null, id); 
    return (
        <form action={DeleteTingkatDepresiWithId}>
            <button className="rounded-sm border p-1 hover:bg-gray-100">
                <IoTrashOutline size={20}/>
            </button>
        </form>
    );
};

// export const SubmitButton = ({label}: {label:string}) => {
//     const {pending} = useFormStatus();

//     const className = clsx("text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
//     {
//         "opacity-50 cursor-progress": pending
//     }
//     );

//     return(
//         <button 
//             type="submit" 
//             className={className}
//             disabled={pending}
//             >
//                 {label === "save"? (
//                     <span>{pending ? "Saving..." : "Save"}</span>
//                 ):(
//                     <span>{pending ? "Updating..." : "Update"}</span>
//                 )}
//             </button>
//     )
// }
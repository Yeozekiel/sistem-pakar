import { getCF } from "../lib/data";
import { EditButtonCF, DeleteGejalaButton } from "./buttons";

const CFTable = async () => {
        const cf = await getCF();

    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="px-6 py-3">#</th>
                    <th className="px-6 py-3">Kondisi</th>
                    <th className="px-6 py-3">Nilai CF</th>
                    {/* <th className="px-6 py-3">Created At</th> */}
                    <th className="px-6 py-3 text-center">Action</th>
                </tr>
            </thead> 
            <tbody>
                {cf.map((cf)=> (
                    <tr key={cf.id} className="bg-white border-b">
                        <td className="px-6 py-3">{cf.id.toString()}</td>
                        <td className="px-6 py-3">{cf.kondisi}</td>
                        <td className="px-6 py-3">{cf.nilai}</td>
                        {/* <td className="px-6 py-3">{gejala.created_at}</td> */}
                        <td className="flex justify-center gap-1 py-3">
                            <EditButtonCF id={cf.id}/>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    )
}

export default CFTable
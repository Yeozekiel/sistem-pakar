import { getGejala } from "../lib/data";
import { EditButton, DeleteButton } from "./buttons";

const GejalaTable = async () => {
        const gejala = await getGejala();

    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thread className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="px-6 py-3">ID</th>
                    <th className="px-6 py-3">Kode Gejala</th>
                    <th className="px-6 py-3">Gejala</th>
                    {/* <th className="px-6 py-3">Created At</th>
                    <th className="px-6 py-3 text-center">Updated At</th> */}
                </tr>
            </thread> 
            <tbody>
                {gejala.map((gejala)=> (
                    <tr key={gejala.id} className="bg-white border-b">
                        <td className="px-6 py-3">{gejala.id.toString()}</td>
                        <td className="px-6 py-3">{gejala.kode_gejala}</td>
                        <td className="px-6 py-3">{gejala.gejala}</td>
                        {/* <td className="px-6 py-3">{gejala.created_at}</td> */}
                        <td className="flex justify-center gap-1 py-3">
                            {/* <EditButton /> */}
                            <DeleteButton id={gejala.id}/>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    )
}

export default GejalaTable
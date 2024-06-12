import { deleteTingkatDepresi } from "../lib/actions";
import { getTingkatDepresi } from "../lib/data";
import { EditButton, DeleteTingkatDepresiButton } from "./buttons";

const handleDeleteTingkatDepresi = (id) =>{
    deleteTingkatDepresi(id);
}
const TingkatDepresiTable = async () => {
        const tingkat_depresi = await getTingkatDepresi();

        return (
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">#</th>
                        <th className="px-6 py-3">Kode Depresi</th>
                        <th className="px-6 py-3">Depresi</th>
                        {/* <th className="px-6 py-3">Created At</th> */}
                        <th className="px-6 py-3 text-center">Action</th>
                    </tr>
                </thead> 
                <tbody>
                    {tingkat_depresi?.map((depresi) => {
                        if (!depresi) {
                            return null;
                        }
                        return (
                            <tr key={depresi.id} className="bg-white border-b">
                                <td className="px-6 py-3">{depresi.id.toString()}</td>
                                <td className="px-6 py-3">{depresi.kode_depresi}</td>
                                <td className="px-6 py-3">{depresi.depresi}</td>
                                {/* <td className="px-6 py-3">{depresi.created_at}</td> */}
                                <td className="flex justify-center gap-1 py-3">
                                    {/* <EditButton /> */}
                                    <DeleteTingkatDepresiButton id={depresi.id}/>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

export default TingkatDepresiTable;
import { UpdateFormCF } from "../../../../components/edit-form";
import { getCFById } from "../../../../lib/data";
import { notFound } from "next/navigation";

const UpdateCFPage = async ({params}: {params: {id: number}}) => {
    const id = params.id;
    const cf = await getCFById(id);

    if(!cf) {
        notFound(); 
    }
    return (
        <div className= "max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Update CF</h1>
            <UpdateFormCF cf={cf}/>
        </div>
    );
};

export default UpdateCFPage;
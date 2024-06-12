import GejalaTable from "../../components/gejala-table";
import Search from "../../components/search";
import { CreateButton } from "../../components/buttons";

const Gejala = () =>  {
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-between gap-1 mb-5">
                <Search />
                <CreateButton href="/gejala/create"/>
            </div>
            <GejalaTable />
        </div>
    )
}

export default Gejala
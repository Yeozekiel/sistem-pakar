import KeputusanTable from "../../components/keputusan-table";
import Search from "../../components/search";
import { CreateButton } from "../../components/buttons";

const Keputusan = () =>  {
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-between gap-1 mb-5">
                <Search />
                <CreateButton href="/keputusan/create"/>
            </div>
            <KeputusanTable />
        </div>
    )
}

export default Keputusan
import CFTable from "../../components/cf-table";
import Search from "../../components/search";
import { CreateButton } from "../../components/buttons";

const CF = () =>  {
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-between gap-1 mb-5">
                {/* <Search /> */}
                {/* <CreateButton href="/cf/create"/> */}
            </div>
            <CFTable />
        </div>
    )
}

export default CF
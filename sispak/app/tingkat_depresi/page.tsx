import TingkatDepresiTable from "../../components/tingkat-depresi-table"
import Search from "../../components/search";
import { CreateButton } from "../../components/buttons";

const TingkatDepresi = () =>  {
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-between gap-1 mb-5">
                <Search />
                <CreateButton href="/tingkat_depresi/create"/>
            </div>
            <TingkatDepresiTable />
        </div>
    )
}

export default TingkatDepresi
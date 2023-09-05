import HeaderUI from "@/components/Navbar/HeaderUI";
import {handler} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";

export default async function Navbar() {
    const session = await getServerSession(handler)
    const data = {
        name: 'Tommy',
        email: 'tommy-s05@hotmail.com'
    }
    return <HeaderUI data={false}/>
    // return <HeaderUI name={'Tommy'} email={'tommy-s05@hotmail.com'}/>
}
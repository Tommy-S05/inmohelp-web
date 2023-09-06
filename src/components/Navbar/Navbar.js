import HeaderUI from "@/components/Navbar/HeaderUI";
import {handler} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import _HeaderUI from "@/components/Navbar/_HeaderUI";

export default async function Navbar() {
    // const session = await getServerSession(handler)
    const data = {
        name: 'Tommy',
        email: 'tommy-s05@hotmail.com'
    }
    return <_HeaderUI data={false}/>
    // return <HeaderUI name={'Tommy'} email={'tommy-s05@hotmail.com'}/>
}
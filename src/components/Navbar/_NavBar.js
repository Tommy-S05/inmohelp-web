import _Header from "@/components/Navbar/_Header";
import {handler} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";

export default async function NNavbar() {
    // const session = await getServerSession(handler)
    // console.log(session);
    // const data = {
    //     name: 'Tommy',
    //     email: 'tommy-s05@hotmail.com'
    // }
    return <_Header/>
}
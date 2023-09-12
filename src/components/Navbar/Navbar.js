import HeaderUI from "@/components/Navbar/HeaderUI";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import _HeaderUI from "@/components/Navbar/_HeaderUI";

export default async function Navbar() {
    const session = await getServerSession(authOptions)
    // console.log(session);
    // return <_HeaderUI data={false}/>
    return <HeaderUI session={session}/>
}
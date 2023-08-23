import HeaderUI from "@/components/Navbar/HeaderUI";

export default function Navbar() {
    const data = {
        name: 'Tommy',
        email: 'tommy-s05@hotmail.com'
    }
    return <HeaderUI data={false}/>
    // return <HeaderUI name={'Tommy'} email={'tommy-s05@hotmail.com'}/>
}
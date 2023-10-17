import ProfileSidebar from "@/components/ProfileSidebar";

export default function ProfileLayout({children}) {
    return (
        <main className={'flex'}>
            <ProfileSidebar/>
            {/*<section className={'w-full max-w-screen-2xl mx-auto'}>*/}
            {children}
            {/*</section>*/}
        </main>
    )
}
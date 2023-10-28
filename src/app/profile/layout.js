import ProfileSidebar from "@/components/ProfileSidebar";

export default function ProfileLayout({children}) {
    return (
        <main className={"flex h-full"}>
            <ProfileSidebar/>
            {/*<section className={'w-full max-w-screen-2xl mx-auto'}>*/}
            {/*<div className={'w-full flex flex-col justify-center'}>*/}
            {/*<div className={'w-full flex flex-col'}>*/}
            {children}
            {/*</div>*/}
            {/*</section>*/}
        </main>
    );
}

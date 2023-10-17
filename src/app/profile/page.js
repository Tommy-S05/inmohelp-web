import Link from "next/link";

export default function ProfilePage() {
  return (
    <section className="h-full flex flex-col justify-center w-full space-y-7 bg-gray-200 pb-20 ">
      <section className="flex justify-center items-center p-4 ">
        <div>
          <p className="text-3xl">Perfil</p>
        </div>
      </section>

      <section className="flex justify-center items-center gap-5 space-x-5 bg-white p-5">
        <div>
          <img
            className=""
            src="assets/perfil/circle-user-regular.svg"
            alt={""}
            height={70}
            width={70}
          />
        </div>

        <div className="flex flex-col">
          <h1 className="py-2">
            InmoHelp
            <hr></hr>
          </h1>

          <label className="py-1">Tommy Sanchez</label>
          <div className="space-x-1">
            <label>Telefono:</label>
            <span>8094437758</span>
          </div>
          <div className="flex flex-col">
            <label>Correo Electronico</label>
            <span className="pb-2">tommy-s05@hotmail.com</span>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <Link
            href={"/profile/edit-profile"}
            className={
              "bg-primary py-1 rounded-full text-center text-white hover:bg-primary/80"
            }
          >
            Editar Perfil
          </Link>
          <Link
            href={"#"}
            className={
              "bg-primary py-1 px-4 rounded-full text-center text-white hover:bg-primary/80"
            }
          >
            Cambiar Contraseña
          </Link>
          <button className=" bg-primary py-1 rounded-full  text-white hover:bg-primary/80">
            Salir
          </button>
        </div>
      </section>
    </section>
  );
}

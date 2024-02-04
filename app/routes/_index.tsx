import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Boda Jacqueline y Andrés" },
    { name: "description", content: "Invitación boda Jacqueline y Andrés" },
  ];
};

export default function Index() {
  return (
    <>
      <main className="flex min-h-svh flex-col items-center justify-between bg-green-50 text-gray-500">
        <img
          src="./images/logo.png"
          alt="Logo boda Jacqueline y Andrés"
          className="w-16"
        />
        <section className="flex h-full flex-1 flex-col items-center justify-center">
          <p className="text-xs">Jacqueline & Andrés</p>
          <div className="flex flex-col gap-4 text-center text-5xl font-thin">
            <p>
              <span className="font-extralight italic">Our love</span> is a
            </p>
            <p>journey that</p>
            <p>begins with</p>
            <p>forever</p>
          </div>
          <p className="text-xs">04.05.2024</p>
        </section>
      </main>
    </>
  );
}

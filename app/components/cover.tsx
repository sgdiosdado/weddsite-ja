export function WeddingCover() {
  return (
    <section className="lg:bg-WALKING flex min-h-svh flex-col items-center justify-between bg-JANDY bg-cover bg-center bg-no-repeat text-white">
      <img
        src="./images/logo.png"
        alt="Logo boda Jacqueline y Andrés"
        className="w-16 self-center backdrop-brightness-[.8]"
      />
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-4 ">
        <p className="text-xs backdrop-brightness-50">Jacqueline & Andrés</p>
        <div className="flex flex-col gap-4 text-center text-5xl font-thin ">
          <p className="backdrop-brightness-50">
            <span className="font-extralight italic">Our love</span> is a
          </p>
          <p className="backdrop-brightness-50">journey that</p>
          <p className="backdrop-brightness-50">begins with</p>
          <p className="backdrop-brightness-50">forever</p>
        </div>
        <p className="text-xs backdrop-brightness-50">04.05.2024</p>
      </div>
    </section>
  );
}

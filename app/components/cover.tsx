export function WeddingCover() {
  return (
    <section className="flex bg-JANDY bg-cover bg-center bg-no-repeat text-white lg:bg-WALKING">
      <div className="flex min-h-svh w-full flex-col items-center justify-between backdrop-brightness-50">
        <img
          src="./images/logo.png"
          alt="Logo boda Jacqueline y Andrés"
          className="w-16"
        />
        <div className="mb-16 mt-auto flex flex-col items-center justify-center gap-4">
          <p className="text-xs ">Jacqueline & Andrés</p>
          <div className="flex flex-col gap-4 text-center text-5xl font-thin ">
            <p>
              <span className="font-extralight italic">Our love</span> is a
            </p>
            <p>journey that</p>
            <p>begins with</p>
            <p>forever</p>
          </div>
          <p className="text-xs">04.05.2024</p>
        </div>
      </div>
    </section>
  );
}

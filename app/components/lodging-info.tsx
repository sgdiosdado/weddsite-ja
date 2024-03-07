export function LodgingInfo() {
  const copyContent = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center gap-5 bg-JA-sage-100 px-10 py-20 [&>*]:z-10">
      <div className="absolute z-0 h-full w-full bg-flowers opacity-5" />
      <p className=" text-sm font-medium text-JA-creme-50">¿DÓNDE QUEDARSE?</p>
      <img src="./images/separator-light.svg" alt="Separador de hospedaje" />
      <p className=" text-3xl font-light italic text-JA-creme-50">Hospedaje</p>
      <p className=" mt-6 text-center text-2xl font-light text-JA-creme-50">
        Hotel Novotel Monterrey Valle
      </p>
      <a
        href="https://maps.app.goo.gl/NoH6JTPjNGbHnMma6"
        target="_blank"
        className=" mt-4 w-full max-w-80 bg-JA-sage-150 p-2 text-center italic text-JA-creme-50 hover:bg-JA-creme-50 hover:text-JA-sage-150"
      >
        UBICACIÓN
      </a>
      <p className=" text-center text-lg font-light text-JA-creme-50">
        Te recomendamos hospedarte en el hotel{' '}
        <strong className="font-medium italic">Novotel Valle</strong>, ya que
        contaremos con transporte del hotel a la ceremonia.
      </p>
      <p className=" text-center text-lg font-light text-JA-creme-50">
        Te compartimos el código con tarifa especial para tu reservación y el
        número telefónico:
      </p>
      <p className=" text-center text-lg font-semibold text-JA-creme-50 ">
        BODA JAQUELINE Y ANDRES <br />
        Tel.{' '}
        <span
          className="underline hover:cursor-pointer hover:text-JA-yellow"
          onClick={(e) => copyContent(e.currentTarget.innerText)}
        >
          81 8133 8133
        </span>
      </p>
      <p className=" text-center text-lg font-light text-JA-creme-50">
        Si tienes alguna otra opción en mente, te recomendamos que sea en la
        zona sur de Monterrey o en San Pedro Garza García.
      </p>
    </section>
  );
}

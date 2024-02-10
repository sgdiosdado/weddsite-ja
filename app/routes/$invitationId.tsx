import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { RouteParams } from 'routes-gen';

export const meta: MetaFunction = () => {
  return [
    { title: 'Boda Jacqueline y Andrés' },
    { name: 'description', content: 'Invitación boda Jacqueline y Andrés' },
  ];
};

export function loader({ params }: LoaderFunctionArgs) {
  const { invitationId } = params as RouteParams['/:invitationId'];
  return invitationId;
}

export default function Invitation() {
  return (
    <main className="flex flex-col bg-[#737F69]">
      <section className="flex min-h-svh flex-col items-center justify-between bg-green-50 text-gray-500">
        <img
          src="./images/logo.png"
          alt="Logo boda Jacqueline y Andrés"
          className="w-16"
        />
        <div className="flex h-full flex-1 flex-col items-center justify-center gap-4">
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
        </div>
      </section>
      <section className="mt-4 bg-[#EEEAE5] p-6 text-center font-light leading-relaxed">
        <p>
          Con alegría en nuestros corazones, les invitamos a celebrar el amor de
          <span className="font-medium italic"> Jacqueline y Andrés</span> en el
          día de su boda. Únanse a nosotros para compartir este momento lleno de
          amor y felicidad
        </p>
      </section>
    </main>
  );
}

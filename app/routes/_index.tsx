import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Boda Jacqueline y Andrés' },
    { name: 'description', content: 'Invitación boda Jacqueline y Andrés' },
  ];
};

export default function Index() {
  return <></>;
}

import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana: { className: string } = Lusitana({
    subsets: ['latin'],
    weight: ['700', '400'],
});

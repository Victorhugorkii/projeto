import '@/globals.css';
import type { PropsWithChildren } from 'react';
import Providers from '@/providers/Providers';

export const metadata = {
  title: 'CRM Freelancer',
  description: 'Painel CRM moderno para freelancers com login, finanças, projetos e relatórios.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

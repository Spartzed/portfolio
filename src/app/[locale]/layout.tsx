import {routing} from '@/i18n/routing';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {BackgroundWrapper} from '@/components/BackgroundWrapper';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <BackgroundWrapper>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </BackgroundWrapper>
    </NextIntlClientProvider>
  );
}

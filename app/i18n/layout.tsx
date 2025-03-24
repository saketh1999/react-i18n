'use client'
import React from 'react'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


export default function I18nLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <html lang="en" className='h-screen'>
          <I18nextProvider i18n={i18n}> {/*important - we need to provide context */}
          <body>
            <nav className='bg-blue-500 py-4'>
              <a className='text-white font-bold underline px-4'>Current</a>
            </nav>
            <main className='p-5'>{children}</main>
            <footer> </footer>
          </body>
          </I18nextProvider>
        </html>

    );
  }
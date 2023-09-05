import ToastProvider from '../components/toast-provider'
import './globals.css'
export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
      <html lang="en">
        <body>
          <ToastProvider/>
          {children}
        </body>
      </html>
    )
  }
  export const dynamic = 'force-dynamic'
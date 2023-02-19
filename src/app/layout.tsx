import './globals.css'
import SideBar from 'components/SideBar'
import Login from 'components/Login'
import { SessionProvider } from 'components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import ClientProvider from 'components/ClientProvider'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <html lang="en">
      <head />
      <body className='bg-gray-100'>
        <SessionProvider session={session}>
          {
            !session ?
              (<Login />)
              :
              (<div className='flex flex-row w-full h-sceen'>
                <SideBar />
                <ClientProvider />
                <div className='w-full h-screen'>
                  {children}
                </div>
              </div>)
          }
        </SessionProvider>
      </body>
    </html>
  )
}

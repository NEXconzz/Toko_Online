export const metadata = {
   title: 'Register',
   description: 'Register toko online',
}


type PropsLayout = {
   children: React.ReactNode
}


const RootLayout = ({ children }: PropsLayout) => {
   return (
       <div>{children}</div>
   )
}


export default RootLayout

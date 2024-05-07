import Image from 'next/image'

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className='flex min-h0screen w-full justify-between font-inter'>{children}
    <div className="auth-asset">
      <div>
        <Image 
          src='/icons/auth-image.svg'
          alt='Auth image'
          width={500}
          height={500}
        />
      </div>
    </div>
    </main>
  )
}

export default AuthLayout
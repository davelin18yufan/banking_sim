import HeaderBox from "@/components/HeaderBox"

const Home = () => {
  const loggedIn = { firstName: 'Dave' }
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            user={loggedIn.firstName || 'Guest'}
            title='Welcome'
            subtext='Access and manage your account, transaction freely'
          />
        </header>
      </div>
    </section>
  )
}

export default Home
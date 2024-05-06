import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"

const Home = () => {
  const loggedIn = { firstName: 'Dave', lastName: 'Lin', email: 'www.google.com' }
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

        RECENT TRANSACTION
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[]}/>
    </section>
  )
}

export default Home
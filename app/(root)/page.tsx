import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import { getLoggedInUser } from "@/lib/actions/user.actions"

const Home = async () => {
  const loggedIn = await getLoggedInUser()
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            user={loggedIn.name || 'Guest'}
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
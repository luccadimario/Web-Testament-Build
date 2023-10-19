import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutMenu';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Purchases', href: '/purchase' },
    { name: 'About', href: '/about' },
    { name: 'Pages', href: '/input'}
  ]

export default function Navbar() {
  return(
    <header className="inset-x-0 top-0 z-50">
    <nav className="flex p-6 lg:px-8" aria-label="Global">
      < div className="flex-0">
        <a href = "/purchase">
          <img className="overflow-hidden w-10 h-10 rounded-full ring-2 ring-gray-500 dark:ring-gray-500" src="logo.png" />
        </a>
      </div>
      < div className="absolute pl-14 pt-2 text-gray-300" href="/purchase">
        Tokens Currently Unavailable
      </div>
      <div className="flex-1 flex flex-row lg:gap-x-12 justify-center">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-300">
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex-0">
          <LoginButton/>
          <LogoutButton/>
      </div>
      </nav>
  </header>
  )
}
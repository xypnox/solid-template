import { Link, Route, Router, Routes } from '@solidjs/router';
import { Home } from './home';
import { NewPage } from './new';

const routes = {
  home: '/',
  new: '/new',
}


const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={routes.home}>Home</Link>
        </li>
        <li>
          <Link href={routes.new}>New</Link>
        </li>
      </ul>
    </nav>
  )
}

export const BaseRouter = () => {
  return (<Router>
    <div>
      <Nav />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.new} element={NewPage} />
      </Routes>
    </div>
  </Router>)
}

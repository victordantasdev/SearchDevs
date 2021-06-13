import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/profile/:username'>
          <Profile />
        </Route>

        <Route path='/404'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

// @flow

import './styles.css';

import React          from 'react';
import { Link }       from 'react-router';
import { connect }    from 'react-redux';
import Helmet         from 'react-helmet';
import classNames     from 'classnames';

import { Translate }  from 'react-redux-i18n';

export const NavBar = ({ lang, setLang }: { lang:string; setLang:(lang:string) => void }) => {
  const nav:link[] = [
    { href:"/beers", label:"Search Beers" }
  ];

  return (
    <nav className="navbar">
      { nav.map(( item:link, id:number ) => (
          <Link key={id}
                className="navbar_item"
                activeClassName={'navbar_item-active'}
                to={item.href}>
            <Translate value={`NavBar.${item.label}`}/>
          </Link>
        ))
      }
    </nav>
  );
};

const App = ({ lang, setLocale, children }:{ lang:string; setLocale:(lang:string) => void; children:React$Element<any> }) =>
  <section className="App">
    <Helmet htmlAttributes={{ lang }}/>
    <NavBar/>
    { children }
  </section>;


export default connect(
)(App);
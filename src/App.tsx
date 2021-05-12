import React, { useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';
import { User } from './interfaces/User.interface';
import AddQuote from "./pages/AddQuote/AddQuote";
import Quotes from './pages/Quotes/Quotes';


import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/Homepage/HomePage';
import Navbar from './components/Navbar/Navbar';
import SignUp from './pages/SignUp/SignUp';
import { ContextProvider } from './state/state';



function App() {
  const [users, setUsers] = useState<User[]>([{ username: "david", firstName: "David", lastName: "Smith", userID: "1122", quotes: [], favouriteQuotes: [] }])
  const [activeUser, setActiveUser] = useState<User>(users[0])


  useEffect(() => {
  }, [])
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Layout>
            <Switch>

              <Route path="/signup" exact>
                <SignUp />
              </Route>

              <Route path="/addQuote" exact>
                <AddQuote />
              </Route>

              <Route path="/allQuotes" exact>
               <Quotes/>
              </Route>

              <Route path="/" exact>
                <HomePage />
              </Route>

            </Switch>
          </Layout>
        </BrowserRouter>
      </ContextProvider>


    </div>
  );
}

export default App;

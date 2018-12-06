import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return(





      <div>
            {if route === '/'}{
              <Main />
            }

            {if route === 'about-us'}{
              <AboutUsComponent />
            }

            {if route === 'staff'}{
              <MeetOurStaffComponent />
            }

            {if route === 'contact'}{
              <ContactUsComponent />
            }








      </div>
    )
  }
}

export default App;
import { EmailList, EmailDetails } from './components';
import StoreProvider from './store/StoreProvider';

import './App.css';
import './font-apex.css';

function App() {

  return (
    <div className="App">
      <StoreProvider>
        <div className='main-container' >
          <EmailList />
          <EmailDetails />
        </div>
      </StoreProvider>
    </div>
  );
}

export default App;

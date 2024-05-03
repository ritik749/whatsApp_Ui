
import Messenger from './components/Messenger'

import {GoogleOAuthProvider} from '@react-oauth/google'
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '413220019002-dpmsvpgipvgnlehag2eanhtu7tju996u.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    

    </GoogleOAuthProvider>
  );
}

export default App;

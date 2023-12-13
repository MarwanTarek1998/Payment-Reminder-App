import './App.css';
import { createTheme , ThemeProvider } from '@mui/material';
import { QueryClientProvider , QueryClient } from 'react-query';
import { Routes , Route } from 'react-router-dom';
import { Signup } from './pages/Signup';
import {Login} from './pages/Login'
import {ActivationPage} from './pages/ActivationPage'
import {ActivationSuccessfullyPage} from './pages/ActivationSuccessfullyPage'
import {DashboardPage} from './pages/DashboardPage'
// import {ReactQueryDevtools} from 'react-query/devtools'

const theme = createTheme({
  palette:{
    primary:{
      main: '#373773',
      light: '#5f5f8f',
      dark: '#262650'
    },
    secondary:{
      main: '#2EA4A5',
      light: '#57b6b7',
      dark: '#207273'
    }
  }
})
function App() {

  const queryClient = new QueryClient()

  return (

    <QueryClientProvider client={queryClient}>

      <ThemeProvider theme={theme}>
              <div className="App">
                
                <Routes>
                  <Route path='/' element={<Login/>}/>
                  <Route path='/sign-up' element={<Signup/>}/>
                  <Route path='/activation-page' element={<ActivationPage/>}/>
                  <Route path='/activation-successfully/:userId' element={<ActivationSuccessfullyPage/>}/>
                  <Route path='/dashboard' element={<DashboardPage/>}/>
                </Routes>

            </div>
        </ThemeProvider>

        {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/> */}

    </QueryClientProvider>
    
    
  );
}

export default App;

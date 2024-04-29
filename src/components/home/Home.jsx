import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import HomeStyles from './Home.scss'
import { WELCOME_HEADING, IMG_ALT, REPO_URL, GITHUB_FORK_TEXT, 
  LICENCE_BADGE, FORK_BADGE, STARS_BADGE, LOGIN_ID, LOGOUT_ID, USERNAME_ID, TOKEN_ID, ROLES_ID } from '../../constants/HomeConstants'
import ReactLogo from '../../assets/images/React.webp'
import CloudsImage from '../../assets/images/wavesOpacity.svg'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import {login, logout, loggedIn, userName, token, roles} from '../../reducers/UserSlice'

const Home = () => {
  
  const isLoggedIn = useSelector(loggedIn)
  const dispatch = useDispatch()
  const displayName = useSelector(userName)
  const displayToken = useSelector(token)
  const displayRoles = useSelector(roles)

  const doLogin = () => {
    dispatch(login({
      name: 'Test',
      token: '123',
      roles: ['Admin', 'Clinician']
    }))
  }

  const doLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <img alt="Clouds" src={CloudsImage} />
      <span className={HomeStyles.forkonGithub}>
        <a href={REPO_URL}>{GITHUB_FORK_TEXT}</a>
      </span>
      <div className={HomeStyles.app}>
        <img className={HomeStyles.logo} alt={IMG_ALT} src={ReactLogo} />
        <h1 className={HomeStyles.heading}>{WELCOME_HEADING}</h1>
        <div className={HomeStyles.badges}>
          <img alt="License Badges" src={LICENCE_BADGE} />
          <img alt="Stars Badges" src={FORK_BADGE} />
          <img alt="Forks Badges" src={STARS_BADGE} />
        </div>
      </div>
      <div>
        <Stack spacing={2} direction='row'>
          <Button variant="text" data-testid={LOGIN_ID} onClick={doLogin}>Log In</Button>
          <Button variant="text" data-testid={LOGOUT_ID} onClick={doLogout}>Log Out</Button>
        </Stack>
      </div>
      {
        isLoggedIn &&
        <div>
          <h2 data-testid={USERNAME_ID}>{displayName}</h2>
          <h2 data-testid={TOKEN_ID}>{displayToken}</h2>
          {
            displayRoles && 
            displayRoles.map((value, index) => {
              return (
                <h2 key={index} data-testid={ROLES_ID}>{value}</h2>
              )
            })
          }
        </div>
      }
    </>
  )
}
export default Home

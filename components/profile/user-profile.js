import { useEffect, useState } from 'react';
import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import { getSession } from 'next-auth/react';

function UserProfile() {
  const [ isLoading, setIsLoading ] = useState(true);
  //const { loadedSession, setLoadedSession } = useState();
  useEffect(() => {
    getSession().then(session => {
      //setLoadedSession(session);
      if (!session) {
        // Redirect away if NOT auth
        window.location.href = '/auth';
      } else {
        setIsLoading(false);
      }
    })
  }, [])
  //const { data: session, status } = useSession();
  //console.log("status = ", status);
  //console.log("session = ", session);

  console.log("isLoading = ", isLoading);

  if (isLoading) {
    return <p className={classes.profile}>Loading...</p>
  }
  

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;

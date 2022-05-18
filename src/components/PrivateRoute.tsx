import React, {useContext, FC} from 'react';
import { Route, RouteProps, Redirect} from 'react-router-dom';
import { AuthContext, AuthContextType } from './authContext/auth-context';


export const PrivateRoute: FC<RouteProps> = ({
    element : Component,
    ...rest
}) =>{
    const {isLoggedIn} = useContext<AuthContextType>(AuthContext);
  return (
    <Route {...rest}
    render = {(props: JSX.IntrinsicAttributes) => {
        return isLoggedIn
        ?
        (<Component {...props} />)
        :
        (
          <Redirect to={{ pathname: '/' }} />
        );
    }}/>
  )
}

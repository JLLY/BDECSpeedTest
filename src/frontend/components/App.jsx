import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { lazy, LazyBoundary } from 'react-imported-component';
import Container from 'react-bootstrap/Container';
import { ErrorBoundary } from 'react-error-boundary';
import 'react-form-builder2/dist/app.css';
import Error from './Error.jsx';

const Basic = lazy(() => import('./Basic.jsx'));
const Loading = lazy(() => import('./Loading.jsx'));
const Login = lazy(() => import('./Login.jsx'));
const Dashboard = lazy(() => import('./Dashboard.jsx'));
const ThankYou = lazy(() => import('./ThankYou.jsx'));
const Map = lazy(() => import('./Map.jsx'));
const Survey = lazy(() => import('./Survey.jsx'));

export default function App() {
  return (
    <Container>
      <ErrorBoundary FallbackComponent={Error}>
        <Switch>
          <LazyBoundary fallback={Loading}>
            <Route exact path="/" render={props => <Basic {...props} />} />
            <Route path="/login" render={props => <Login {...props} />} />
            <Route path="/admin" render={props => <Dashboard {...props} />} />
            <Route path="/thankyou" render={props => <ThankYou {...props} />} />
            <Route path="/map" render={props => <Map {...props} />} />
            <Route path="/survey" render={props => <Survey {...props} />} />
          </LazyBoundary>
          <Redirect to="/" />
        </Switch>
      </ErrorBoundary>
    </Container>
  );
}

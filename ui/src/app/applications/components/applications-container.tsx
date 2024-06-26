import * as React from 'react';
import {Route, RouteComponentProps, Switch} from 'react-router';
import {ApplicationDetails} from './application-details/application-details';
import {ApplicationFullscreenLogs} from './application-fullscreen-logs/application-fullscreen-logs';
import {ApplicationsList} from './applications-list/applications-list';

export const ApplicationsContainer = (props: RouteComponentProps<any>) => (
    <Switch>
        <Route exact={true} path={`${props.match.path}`} component={ApplicationsList} />
        <Route exact={true} path={`${props.match.path}/opsmx/creation`} component={ApplicationsList} />
        <Route exact={true} path={`${props.match.path}/:name`} component={ApplicationDetails} />
        <Route exact={true} path={`${props.match.path}/:name/opsmx/details`} component={ApplicationDetails} />
        <Route exact={true} path={`${props.match.path}/:appnamespace/:name`} component={ApplicationDetails} />
        <Route exact={true} path={`${props.match.path}/:appnamespace/:name/opsmx/details`} component={ApplicationDetails} />
        <Route exact={true} path={`${props.match.path}/:name/:namespace/:container/logs`} component={ApplicationFullscreenLogs} />
        <Route exact={true} path={`${props.match.path}/:appnamespace/:name/:namespace/:container/logs`} component={ApplicationFullscreenLogs} />
    </Switch>
);

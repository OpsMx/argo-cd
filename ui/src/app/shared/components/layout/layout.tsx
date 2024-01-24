import * as React from 'react';
import {Sidebar} from '../../../sidebar/sidebar';
import {ViewPreferences} from '../../services';
import { Context } from '../../context';

require('./layout.scss');

export interface LayoutProps {
    navItems: Array<{path: string; iconClassName: string; title: string}>;
    onVersionClick?: () => void;
    children?: React.ReactNode;
    pref: ViewPreferences;
    isExtension?: boolean;
}

const checkUrlIncludesOpsmx = (param: string) => {
    let urlSplit = param?.split('/')
    if(urlSplit && urlSplit[urlSplit.length-2] == 'opsmx' && urlSplit[urlSplit.length-1] == 'creation'){
        return true;
    }
        return false;
}

export const Layout = (props: LayoutProps) => {
    const context = React.useContext(Context);
    const locationPath = context.history.location.pathname;
    const pathHasOpsmx = checkUrlIncludesOpsmx(locationPath);
    return (
    <div className={props.pref.theme ? 'theme-' + props.pref.theme : 'theme-light'}>
        <div className={`cd-layout ${props.isExtension ? 'cd-layout--extension' : ''} ${pathHasOpsmx ? 'opsmx_hide': ''}`}>
            <Sidebar onVersionClick={props.onVersionClick} navItems={props.navItems} pref={props.pref} />
            <div className={`cd-layout__content ${props.pref.hideSidebar ? 'cd-layout__content--sb-collapsed' : 'cd-layout__content--sb-expanded'}`}>{props.children}</div>
        </div>
    </div>
);
}

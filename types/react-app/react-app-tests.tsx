import * as React from 'react';
import { Navigation, Link, Layout, Header, createApp } from './index';

const store = {};
const routes = {
    path: '/',
    children: {
        fooRoute: {
            path = '/',
            action() {
                return {
                    title: 'Foo Page',
                    component: <h1>Foo!</h1>
                };
            }
        },
        barRoute: {
            path: '/bar',
            action() {
                return {
                    title: 'Bar Page',
                    component: <h1>Bar!</h1>
                };
            }
        }
    }
};

<Link to="/bar" className="a-link"/>;
<Layout className="my-layout"/>;
<Header />;
<Navigation />;

createApp({
    routes,
    context: { store },
    container: document.body
});

import Service, { inject as service } from '@ember/service';
import { copy } from 'ember-copy';
import Auth from '@aws-amplify/auth';
import Amplify, { Hub } from '@aws-amplify/core';
import Config from 'ember-amplify-cognito-azure-ad/config/environment';

export default class AmplifyService extends Service {
    @service hub;

    origin = `${window.location.protocol}//${window.location.hostname}`;

    get amplifyConfig() {
        let amplify = copy(Config.APP.amplify, true);
        amplify.Auth.oauth.redirectSignIn = this.origin + amplify.Auth.oauth.redirectSignIn;
        amplify.Auth.oauth.redirectSignOut = this.origin + amplify.Auth.oauth.redirectSignOut;
        return amplify;
    }

    configure() {
        Amplify.Logger.LOG_LEVEL = this.amplifyConfig.logLevel;
        this.listener = this.hub.listener.bind(this.hub);
        Hub.listen('auth', this.listener);
        Auth.configure(this.amplifyConfig.Auth);
    }

    getCurrentUser() {
        return Auth.currentAuthenticatedUser();
    }

    signIn() {
        Auth.federatedSignIn();
    }

    signOut() {
        return Auth.signOut();
    }
}

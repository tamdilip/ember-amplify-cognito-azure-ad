import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';

export default class TokensRoute extends Route {
    @service hub;

    beforeModel() {
        return new Promise((resolve, reject) => {
            this.hub.onSuccessCallback = async () => {
                try {
                    this.transitionTo('home');
                } catch (error) {
                    reject(error);
                }
            };
            this.hub.onErrorCallback = async () => {
                reject();
            };
        });
    }
}

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';

export default class TokensRoute extends Route {
    @service hub;

    beforeModel(transition) {
        return new Promise((resolve, reject) => {
            if (Object.keys(transition.to.queryParams).length > 0) {
                this.hub.onSuccessCallback = async () => {
                    this.transitionTo('home');
                };
                this.hub.onErrorCallback = async () => {
                    reject();
                };
            }
            else {
                reject();
            }
        });
    }
}

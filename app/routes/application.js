import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
    @service amplify;

    beforeModel(transition) {
        this.amplify.configure();
        if (transition.targetName !== 'tokens') {
            return this.amplify.getCurrentUser()
                .then(() => {
                    this.transitionTo('home')
                })
                .catch(() => {
                    this.amplify.signIn();
                    transition.abort();
                });
        }
    }
}

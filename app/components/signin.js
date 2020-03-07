import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class SigninComponent extends Component {
    @service router;

    @action
    signIn() {
        window.location.href = this.router.rootURL;
    }
}

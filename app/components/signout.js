import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";

export default class SignoutComponent extends Component {
    @service amplify;

    @action
    signOut() {
        this.amplify.signOut();
    }
}

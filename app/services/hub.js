import Service from '@ember/service';

export default class HubService extends Service {
    listener(data) {
        const { payload } = data;
        switch (payload.event) {
            case 'signIn':
                this.onSuccessCallback();
                break;
            case 'signIn_failure':
                this.onErrorCallback(payload);
                break;
        }
    }
}

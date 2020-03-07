# ember-amplify-cognito-azure-ad
A basic SAML based authroization code grant flow authentication using AWS Cognito with Azure Active Directory IdP through AWS Amplify with EmberJS (octane).

This repo gives a gist of handling federated sign-in using Amplify's Hub events on callback redirects in ember flow without any promise callbacks.

### Installation

```sh
        $ git clone https://github.com/tamdilip/ember-amplify-cognito-azure-ad.git
        $ cd ember-amplify-cognito-azure-ad
        $ npm i
        $ ember s
```

#### Post installation

Hit - http://localhost:4200/ 

Takes to Microsoft login page (authenticates only users in active directory)

On succesful login should see below page :)

![Image of logged-in home pages](https://raw.githubusercontent.com/tamdilip/ember-amplify-cognito-azure-ad/master/public/assets/images/successful-login.png)


### References
* [Amazon Cognito user pool OAuth 2.0 grants](https://aws.amazon.com/blogs/mobile/understanding-amazon-cognito-user-pool-oauth-2-0-grants/)
* [Amplify federated sign-in](https://aws-amplify.github.io/docs/js/authentication)
* [Cognito User Pool with an Azure AD idp setup](https://medium.com/@zippicoder/setup-aws-cognito-user-pool-with-an-azure-ad-identity-provider-to-perform-single-sign-on-sso-7ff5aa36fc2a)


### Console
* [AWS Cognito](https://console.aws.amazon.com/cognito/users/?region=us-east-1#/pool/us-east-1_VkCkeBZb2/details?_k=wqwgz9)
* [Azure AD](https://portal.azure.com/#blade/Microsoft_AAD_IAM/UsersManagementMenuBlade/AllUsers)



**Happy coding :) !!**

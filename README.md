# ember-amplify-cognito-azure-ad 
[![Generic badge](https://img.shields.io/badge/gh%20pages-🚩%20Live%20demo-blue.svg)](https://tamdilip.github.io/ember-amplify-cognito-azure-ad)


A basic SAML based authroization code grant flow authentication using AWS Cognito with Azure Active Directory IdP through AWS Amplify with EmberJS (octane).

This repo gives a gist of handling federated sign-in using Amplify's Hub events on callback redirects in ember flow without any promise callbacks.

![Image of auth flow](https://raw.githubusercontent.com/tamdilip/ember-amplify-cognito-azure-ad/master/public/assets/images/Arch.png)


### Installation

```sh
        $ git clone https://github.com/tamdilip/ember-amplify-cognito-azure-ad.git
        $ cd ember-amplify-cognito-azure-ad
        $ npm i
        $ ember s
```

#### Post installation

Hit - http://localhost:4200 

Takes to login page with both Microsoft AzureAD option (authenticates only users in active directory) and Cognito user pool option ( Sign up available)

On successful login should see below page :)

![Image of logged-in home pages](https://raw.githubusercontent.com/tamdilip/ember-amplify-cognito-azure-ad/master/public/assets/images/successful-login.png)


### References
* [Amazon Cognito user pool OAuth 2.0 grants](https://aws.amazon.com/blogs/mobile/understanding-amazon-cognito-user-pool-oauth-2-0-grants/)
* [Amplify federated sign-in](https://aws-amplify.github.io/docs/js/authentication)
* [Cognito User Pool with an Azure AD idp setup](https://medium.com/@zippicoder/setup-aws-cognito-user-pool-with-an-azure-ad-identity-provider-to-perform-single-sign-on-sso-7ff5aa36fc2a)


### Console
* [AWS Cognito](https://console.aws.amazon.com/cognito/users/?region=us-east-1#/pool/us-east-1_VkCkeBZb2/details?_k=wqwgz9)
* [Azure AD](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ManagedAppMenuBlade/SignOn/appId/7c9b70d0-471b-434d-870e-79ad470e3ce9/objectId/9f8dc68b-abf1-4fec-975a-0b199d3b8d4b)



**Happy coding :) !!**

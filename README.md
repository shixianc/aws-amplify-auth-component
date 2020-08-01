<img src="https://github.com/shixianc/aws-amplify-auth-component/blob/master/img/UI-update-v1.0.png" width="500">
# Customizable Authentication Component Prototype <br />

[-> Click to see the Demo <-](https://master.d38jixybioco37.amplifyapp.com).

### This ducoment describes the development and deployment of the customized Amplify Authentication with multiple user types using Amplify and Cognito.<br /><br /><br />
### Table of contents:
* Work Flow of the current Auth component and how to use the prototype
* Configuration for Frontend and Backend
* Lambda Triggers on Node.js
* Existing Problems
<br /><br /><br />
<br /><br />

## 1. Work Flow of the current Auth component and how to use the prototype

This Authentication demo has 7 main React Components:
- App.js
- UserTypeB.js
- UserTypeA.js    
- ChangePassword.js
- ForgotPassword.js
- LoginMsg.js
- Signin.js
###### Navigation flow will be implemented with React Routers. <br /><br />
<img src="https://github.com/shixianc/aws-amplify-auth-component/blob/master/img/hf_auth_flow.png" width="800"> <br/>

To test out the Demo prototype, few extra step to take before using:
1. Open broswer inspect to monitor any errors.
2. reset password function only works when you already signed in! Just as the flow diagram shown above.
3. Password has to be at least 8 characters.
4. Type in correct phone number to test out "forget password" function. Format: +1xxxxxxxxxx  (10 'x' s).
<br /><br />

Library used:
```Javascript 
import { Auth } from 'aws-amplify';
```
Be sure to use async for all API calls. These APIs provide the fundamental of Amplify authentication. Additionally, we need to take care of the return value properly to generate the complete authentication flow. 
```Javascript 
{
    user: CognitoUser;
    userConfirmed: boolean;
    userSub: string;
}
```
Details about the implementation of CognitoUser: (@line 48) <br />
https://github.com/aws-amplify/amplify-js/blob/4644b4322ee260165dd756ca9faeb235445000e3/packages/amazon-cognito-identity-js/index.d.ts#L48 <br />
Referrence to the Auth APIs :
https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js

Use the following function to retrieve the current signed in user and information anytime during a session
```Javascript
const user = await Auth.currentAuthenticatedUser();

//API:
currentAuthenticatedUser(params?: CurrentUserOpts): Promise<CognitoUser | any>
```

<br /><br /><br /><br />
## 2. Configuration for Frontend and Backend

By setting up Cognito User Pool, we are able to create, edit and maintain users and groups in a centralized place. We can have different applications connecting and re-using the same User Pool by adding the following configuration to "index.js" file. Another advantage is that, team may expand the business beyond currrent user base and it provides this flexibility in the future. By adding Groups to the same user pool, we can create more account types, such like Layers, drivers, etc. to fullfil custmoized needs for both users and developers. And most importantly team only needs to maintain one central user pool. 

###### note: parameters below can be found in Cognito user pool home page.
```JavaScript 
Amplify.configure({
  Auth: {
    // cognito user pool region
    region: 'us-east-2',

    // specify our user pool id. 
    userPoolId: 'us-east-2_XXXXXXX',

    // Amazon Cognito Web Client ID 
    userPoolWebClientId: 'XXXXXXXXXXXXXXXXX',

    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  },
});
```

One issue to keep in mind is that, the standard attributes cannot be changed once created. However, we can add more cutomized attributes. <br />
<img src="hhttps://github.com/shixianc/aws-amplify-auth-component/blob/master/img/Screen%20Shot%202020-05-22%20at%205.15.24%20PM.png" width="600"> <br/><br /><br />

## 3. Lambda Triggers on Node.js

### - 3.1 Why should we use Lambda Triggers ?
Lambda Triggers are some functions saved on the AWS backend running on Node.js. They are called automatically by AWS Amplify under certain conditions. In this article, we mainly use 2 triggers: 
1. Pre-SignUp Lambda Trigger : called before Cognito signing up an user.
2. Post-Confirmation Lambda Trigger : called right after a user is confirmed, either through email or phone number.

With this two functions, we are able to achieve -> 
1. automatically confirm users without them verifying email or phone number. This is crucial because Cognito explicitly require at lease one contact information must be verified in order to reset password. 
2. automatically assign users to according groups. In our case, either GroupA or GroupB. This solves the problem that we need to find a way to create different type of users. There is another workaround to achieve this without Lambda Trigger. Client can initiate a HTTP POST request to the server API asking to be assigned to some groups. One problem I find is that if error occurs on client side, group cannot be assigned and that will affect later user interface rendering correctly. Lambda function is run on AWS and should be stable and reliable. Triggers setting can also be found in User Pool settings so it is easy to maintain and monitor. 

```JavaScript 
exports.handler = (event, context, callback) => {
    
    // auto confirm user account
    event.response.autoConfirmUser = true;
    
    // auto verify email
    if (event.request.userAttributes.hasOwnProperty("email")) {
        event.response.autoVerifyEmail = true;
    }
    
    //auto verify phone number
    if (event.request.userAttributes.hasOwnProperty("phone_number")) {
        event.response.autoVerifyPhone = true;
    }
    
    callback(null, event);
}
```
```JavaScript 
const aws = require('aws-sdk');

exports.handler = (event, context, callback) => {
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider();
  
  console.log("event", event);
  console.log("event", event.request);
  console.log("event", event.request.userAttributes);

  const isFacility = event.request.userAttributes["custom:Facility"];
  
  if (isFacility !== undefined) {
    const params = {
      GroupName: 'Facility',
      UserPoolId: event.userPoolId,
      Username: event.userName,
    }
  
    cognitoidentityserviceprovider.adminAddUserToGroup(params, (err) => {
      if (err) { callback(err) }
      callback(null, event);
    })
  } else {
    const params = {
      GroupName: 'Professional',
      UserPoolId: event.userPoolId,
      Username: event.userName,
    }
  
    cognitoidentityserviceprovider.adminAddUserToGroup(params, (err) => {
      if (err) { callback(err) }
      callback(null, event);
    })
  }
}
```
##### Do Not forget to give Lambda Function correct IAM roles(admin) to have write access to User Pool. Similarly, we have to set all attributes with Read and Write access in User Pool settings. <br /><br />

### - 3.2 How to Debug on Lambda Console ?

Lambda triggers are useful and gives more potential for future development. However, how do we debug it from server side? 
One way to debug it is from Lambda Console. It allows you to customize Test cases and get real time results. But in particular cases, it cannot catch problems in real test cases. 
Another way to debug is by setting console.log(...) in the lambda triggers just as we usually debug in our IDE. But to find the backend console is a bit trickier. We need to click the log file from: **Lambda Console -> Monitoring -> Scroll down to find "Cloud Watch Logs Insights" -> recent invocations -> click on the most recent log file** Note: it might take a few minutes for the most recent log file to show up. 


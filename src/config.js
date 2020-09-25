const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "dsl-notes-app-uploads",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://qobhnbta04.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "notes-app-2-api-dev-attachmentsbucket-5qmsazagzrj1",
    APP_CLIENT_ID: "5unfcads3400ruvup7746mh2pm",
    IDENTITY_POOL_ID: "us-east-1:e25f5c65-e589-467b-836f-01305c739553",
  },
  STRIPE_KEY:
    "pk_test_51HTf02AS6G7S7ofTqB5blyMZDyrSHhqIepVOxPa3yG9Gg5PaNuhO3W2B2M9c1G6v2yXo6Bzl5aX3kfunYEXAAKS100R4g4ppUx",
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1s92du9n4bw8a",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: " https://6b1smh8nw2.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Pp0VVn8mK",
    APP_CLIENT_ID: "4ovecju2lcb029oroa2dfsa65n",
    IDENTITY_POOL_ID: "us-east-1:219896e3-bd16-4126-ae8c-03cb61c71205",
  },
  STRIPE_KEY:
    "pk_test_51HTf02AS6G7S7ofTqB5blyMZDyrSHhqIepVOxPa3yG9Gg5PaNuhO3W2B2M9c1G6v2yXo6Bzl5aX3kfunYEXAAKS100R4g4ppUx",
};

const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};

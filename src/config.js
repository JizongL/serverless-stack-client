export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "dsl-notes-app-uploads",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://o0qmb0z7aj.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_sgyMTb7BW",
    APP_CLIENT_ID: "m25as8on7c52teo3kh0liejku",
    IDENTITY_POOL_ID: "us-east-1:6e081c26-b2da-4389-986c-615182aac763",
  },
};

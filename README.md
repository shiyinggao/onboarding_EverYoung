# Welcome to onboarding_EverYoung


## Project Overview

OnboardingEverYoung is a project based on AWS Lambda and API Gateway, used to match and return user information based on the input name. This project is developed using TypeScript and relies on AWS CDK for infrastructure deployment.

## Project Dependencies

- Node.js v22.3.0
- npm
- AWS CDK v2.147.2

## Installation Steps

1. Download the project files and ensure the following directory structure:

```
onboarding_EverYoung/
├── lib/
│   ├── lambda/
│   │   ├── lambda.ts
│   │   ├── lambda.d.ts
│   │   ├── lambda.js
│   ├── onboarding_EverYoung-stack.ts
├── test.js
├── package.json
├── tsconfig.json
```

2. Navigate to the project directory in your terminal:

```bash
cd path/to/onboarding_EverYoung
```

3. Install project dependencies

```bash
npm install
```

4. Configure AWS credentials

Ensure you have configured the AWS CLI with the correct access permissions. You can configure AWS credentials using the following command:

```bash
aws configure
```

5. Deploy the infrastructure

```bash
npx cdk deploy
```

## Running the Project

### Development Environment

You can run local tests using the following commands:

1. Compile TypeScript code

```bash
npx tsc
```

2. Run the test script

```bash
node test.js
```

### Production Environment

After deployment, the API Gateway URL will be output to the console. You can access the URL via a browser or the curl command. For example:

```bash
curl -X GET 'https://your-api-gateway-url/prod/?name=Huawen Wu'
```

## Environment Variable Configuration

If the project requires environment variable configuration, ensure you create a `.env` file and define the necessary variables. Here is a sample `.env.example` file template:

```plaintext
AWS_REGION=ap-southeast-2
```

## Data Files or Other Resources

Ensure the following files and directories exist in the project root:

- `lib/lambda/lambda.ts`: The main code file for the Lambda function.
- `lib/onboarding_EverYoung-stack.ts`: The CDK stack configuration file.
- `test.js`: The script file used for local testing.

## Support and Contact Information

If you have any questions or need assistance, please contact the project maintainer:

- Email: shiying.gao@sydney.edu.au

---

Thank you for using OnboardingEverYoung!
```

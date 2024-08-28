# AccelByte TypeScript SDK Code Generator

AccelByte Code Generator is a CLI tool that facilitates creating an AccelByte TypeScript SDK from AccelByte OpenAPI definitions.

## CLI
This codegen build a CLI called `accelbyte-codegen` that will be used to generate code from given config.

```
Commands:  
accelbyte-codegen download-swaggers  Download swaggers JSON files  
accelbyte-codegen generate-code      Generate code based on downloaded swagger
files

Options:
--version           Show version number                                         [boolean]  
--config            Config file providing backend services URL.                 [string] [required]  
--swaggersOutput    Output path for downloaded swaggers JSON files.             [string] [required]  
--output            Output path for generated code. Required for generate-code  [string]  
--admin             Only generate /admin endpoints.                             [boolean] [default: false]  
--help              Show help                                                   [boolean]  
```

### Config file
Provide swaggers url you wish to generate, store it in .json format file.

```
[
  ["iam", "Iam", "iam.json", "https://example.com/iam/apidocs/api.json"]
]
```

## How to Generate

**Step 1: Set Up Your Node.js Environment** Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from the official website: https://nodejs.org/en/ 

__*It is recommended__ to use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) to install Node.js so you can switch between Node versions more easily 

**Step 2: Create a New Node.js Project (if needed)** If you are starting a new project, create a new directory and initialize it as a Node.js project. You can do this using the following commands: 
```
mkdir my-project
cd my-project
npm init
```
Follow the prompts to set up your project's package.json file.

**Step 3: Install the Package** To use `@accelbyte/codegen`, you need to install it as a dependency for your project. Run the following command within your project directory:
```
npm install @accelbyte/codegen
# Or, with yarn:
yarn add @accelbyte/codegen
```
**Step 4: Configure the Package** Check the documentation or the README of the package for specific configuration instructions. 
  1.	Prepare The `CHANGELOG.md` file, create the Changelog file in the root project with `CHANGELOG.md` file name.
  2.	Prepare Config file, Provide the swaggers URL you wish to generate with the format of an Array of array detailed services, so we can add multiple services at the same time, by adding an Array of detailed services into `Config.json` Array like this:
```
[
  [serviceName, aliasName, swaggerFileOutput, swaggerURL],
  [serviceName2, aliasName2, swaggerFileOutput2, swaggerURL2],
  ...
]
```
and then store it in .json format file (we suggest placing the file in the root directory). example:
```
[
  ["iam", "Iam", "iam.json", "https://example.com/iam/apidocs/api.json"]
]
```
for the Accelbyte Demo environment, this will look like this
```
[
  ["iam", "Iam", "iam.json", "https://demo.accelbyte.io/iam/apidocs/api.json"]
]
```

**Step 5: Download Swagger Files** download the swagger file to the project by executing this command
```
npm exec -- accelbyte-codegen download-swaggers --config ./config.json --swaggersOutput ./swaggers
# Or, with yarn:
yarn accelbyte-codegen download-swaggers --config ./config.json --swaggersOutput ./swaggers
```
*note: please adjust the `--config` flag with the path of config.json file that was already set up before, and please specify the swagger output directory by using `--swaggersOutput` flag.

**Step 6: Generate Code from Swagger Files** after the swagger file has already been downloaded we can proceed to generating TypeScript SDK code from the Swagger File using this command : 
```
npm exec -- accelbyte-codegen generate-code --config ./config.json --swaggersOutput ./swaggers --output ./sdk
```
*note: please adjust the `--config` flag with the path of config.json file that was already set up before, and please specify for the swagger output directory by using `--swaggersOutput` flag, and the directory output of generated SDK using `--output` flag.
if it is successful the result will look like this, and the WebSDK code should be generated under the/sdk directory

```
----------
Generating API: { title: 'justice-iam-service', version: '7.4.0' }
!!!! Missing x-version ...
COMPLETED
----------
```

**Step 7: Prettify the files (Optional)** 

To prettify the code file using the prettier tool, please install the plugin first by doing this:
```
npm install prettier 
# Or, with yarn:
yarn add prettier
```
after installing, execute prettier as below
```
npm exec prettier --write swaggers/*.json && prettier --write sdk/**/*
# Or, with yarn:
yarn prettier --write swaggers/*.json && prettier --write sdk/**/*
```
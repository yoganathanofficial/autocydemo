**cypress installation:**
As cypress is an open source tool, I installed it by referring https://docs.cypress.io/guides/getting-started/installing-cypress guide with all pre-requisites and configuration.
Also I installed “cypress-cucumber-preprocessor” by referring https://www.npmjs.com/package/cypress-cucumber-preprocessor to develop the test cases in BDD with Gherkin language. 

**Development of Test cases for given Assignments:**
***Assignment: 1***
- Created “cucumeber-bdd” folder under “integration” folder and created “amazon.feature” file to develop the automation tests with Gherkin language.
- Developed the scenario based on given assignment as below,


       - Scenario: Search Nikon and select 2nd item then verify the product topic     contains Nikon D3X
           - Given I search the Nikon in amazon website search box
           - When I sort the results from highest price to lowest
           - And I Select the second product and click for details
           - Then Verify the product topic contains Nikon D3X

- Created “amazon” folder under “cucumber-bdd” folder to have step definition files based page object model and developed the cypress based java script code in “search.js” file for search page related steps for above scenario.
- Created “product.js” file under “amazon” folder and developed cypress code for product related steps for above scenario.
- Created “before_and_after_steps.js” file under “amazon” folder to have the test setup test teardown related steps. For now, I kept the opening amazon website in the test setup as all scenarios are required to open amazon website to perform the further verification.
- For now, I assigned scalar variable for all web elements css paths for easy maintenance.
- Also, I assigned scalar variables for timeout values and applied dynamic wait for most of the places to have stable execution if minor slowness in the application side. For now, I kept these time out based variables in each page object step definition files. I would make it as a global variable in upcoming pull request to avoid duplicates.

***Assignment: 2***
- Created another scenario in “amazon.feature” file with Gherkin language as below, Note: This scenario would be executed 2 times with 2 different set of data as it’s using Scenario Outline + Examples.
    - Scenario Outline: Add eGift cards with details to Cart
        - Given I Select Animated eGift card category in amazon
     website
        - When I select random Animated eGift card
        - And I enter random amount from $1 to $100
        - And I enter "<To>" and "<From>" and "<Message>" and 
		"<Quantity>" details
        - And I select the second available delivery date from the 
		calendar
        - And I Add produt to the cart
        - Then Verify that Add to cart API request is successfull

        Examples:
          | To                 | From  | Message          | Quantity |
          | yoga.d@gmail.com   | YogaD | Gift from YogaD  | 1 |
          | dyoga@outlook.com  | Dyoga | Dyoga Gift       | 2 |


- Created “eGiftCard.js” file under “amazon” folder and developed cypress code for eGiftCard related steps for above scenario.
- For now, I implemented the delivery date selection with specific date. I would implement the second available delivery date section in upcoming pull requests as per requirement.
- Used cypress “intercept” and verified the back end API service response status code while adding eGiftCard to cart.
- I would implement the verification for correct card designs are available for standard & animated by comparing json baseline using “intercept” in upcoming pull requests as per requirement.

**Executing cypress automated tests:**
- There are 2 options available to execute the cypress automation in local system.
1. Open the “Cypress Test Runner” application by executing the command “npx cypress open” in the cypress project root directory path via cmd.exe. ie. "C:\Users\hp\yoga\autocydemo> npx cypress open"
	- Once the cypress Test runner opened, the scenario feature files would be displayed. Once clicked those feature files, then tests will be executed. 
	- Note: In this method, screenshot on failure (This would be enabled by adding some configuration) and video recording (This cannot be enabled) will not happen. Also, the corresponding browser should installed already in the system.
2. Executing the command “npx cypress run” in cypress project root directory path via cmd.exe. ie. "C:\Users\hp\yoga\autocydemo> npx cypress run". 
    - In this mode, tests would be executed in headless mode and screenshot on failure and video recording are enabled automatically.
- **Note:** 
    - My personal laptop is very old and CPU processor and RAM are not capable of recording the video of the execution in cypress run mode. So, I could not able to share/upload the completed test execution video. But still few screenshots and incompleted video has been made available already in github on following paths  -https://github.com/yoganathanofficial/autocydemo/tree/master/cypress/screenshots/cucumber-bdd/amazon.featurehttps://github.com/yoganathanofficial/autocydemo/tree/master/cypress/videos/cucumber-bdd
    - Also I shared the screenshots for cpu process exited unexpectedly on cypress run mode execution issue in this path https://github.com/yoganathanofficial/autocydemo/tree/master/cypress/downloads/misc.
    - ***I would be glad to show my test execution in my laptop directly by cypress Test Runner mode any time through video conference.***

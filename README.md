# Issue Tracker


## Description

This is an issue tracker repository that helps you manage and track issues, bugs, and feature requests for your projects. It provides a centralized platform for collaboration between developers and testers.

## Features

- Create, update, and close issues
- Add labels and milestones to issues for better organization
- Comment and discuss on specific issues
- Search and filter issues based on various criteria

## Installation
```
1. Clone the repository:

git clone https://github.com/apuncoder/issue-tracker.git

2. Navigate to the project directory:

cd issue-tracker

3. Install the dependencies:

npm install

4. Start the application:

npm start

Access the application at `http://localhost:8000` in your web browser.

```
## Hosted Link
https://issue-tracker-ejmt.onrender.com/


### Folder Structure
```
Employee Review System
    |
    |               
    |--->assets---->js|--->filterIssues.js
    |                 |--->searchIssues.js
    |
    |--->config---->|--->mongoose.js              
    |
    |                
    |--->controllers-->|-->home_controller.js
    |                  |-->project_controller.js
    |
    |               |-->issue.js
    |--->models---->|
    |               |-->project.js
    |
    |--->routes---->|-->index.js
    |               |-->project.js
    |
    |               |-->_header.js
    |               |-->_footer.js
    |              |---> _issue_form.ejs
    |              |---> _issues.ejs
    |--->views---->|--->_project_form.ejs
    |              |--->home.ejs
    |              |--->layout.ejs
    |              |--->project_page.ejs
    |
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->  package.json
```

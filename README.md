
# Landing Page

## Preview
![Project Preview](landing-page.gif)

## Description
This project consists of a multi-section landing page with a dynamically updating navigation menu based on the number of the sections which is added to the page.
It's built on top of [this GitHub repository](https://github.com/udacity/fend/tree/refresh-2019)
## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Development](#development)
* [Contribute](#contribute)

## Installation
 Open your terminal and run the following command
     `git clone https://github.com/AhmedMohammed3/LandingPage_Udacity.git`
## Usage
Just open [index.html file](index.html) in your favorite browser
## Development
The development phase was split to 3 steps:
 1. HTML Edits
	 - Added section 4
	 - Added section 5
 2. CSS Edits
	 - Added a new class for toggling the navigation menu position: fixed, to hide the whole navigation menu when no scrolling activity.
	 - Added a new class for active navigation item.
 3. JavaScript Edits
	 - Created a navigation item click handler to smoothly scroll to the specified section.
	 - Created a helper function which creates a navigation item.
	 - Created a main function which builds the navigation menu based on the number of the sections on the page.
	 - Created a main function which creates a button in the bottom left corner that navigates to the page top when clicked.
	 - Created a main function which builds the sections as a collapsible sections
	 - Created a helper function which setting the section with the specified index as active section
	 - Added a scroll handler to the whole document that does three main functions:
			 - Toggling to top button when scrolling to a specific position.
			 - Make the navigation menu fixed only when scrolling.
			 - Setting a section as active when the viewport is showing this section.
			 - Calling of Main Functions
## Contribute
### Adding new features or fixing bugs
1. Open your terminal and clone the repository
     `git clone https://github.com/AhmedMohammed3/LandingPage_Udacity.git`
2. Create your branch
      `git checkout -b {YOUR_BRANCH_NAME}`
3. Make your edits and review it well.
4. Commit your changes with appropriate message. Follow [these git style guides](https://udacity.github.io/git-styleguide/)
      `git checkout -b {YOUR_BRANCH_NAME}`
5. Push your changes
      `git push origin {YOUR_BRANCH_NAME}`
6. Create a merge request
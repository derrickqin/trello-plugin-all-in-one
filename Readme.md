# Trello plugin all-in-one
> You all-in-one [Trello](https://trello.com/) board plugin

![Chrome Web Store](https://img.shields.io/chrome-web-store/d/pnfioopglhebphfgkagefdmajgibahkk.svg?style=for-the-badge&label=Chrome%20users&ogo=google-chrome&logoColor=white)
![Chrome Web Store](https://img.shields.io/chrome-web-store/v/pnfioopglhebphfgkagefdmajgibahkk.svg?style=for-the-badge&logo=google-chrome&logoColor=white)

## Supported Browser
Get it from Chrome Store! [Trello plugin all-in-one](https://chrome.google.com/webstore/detail/trello-plugin-all-in-one/pnfioopglhebphfgkagefdmajgibahkk?hl=en)

## Background
Trello boards are really useful for lots of purposes. However, there are lots of features that it could have provided such as
- show card age
- show card number
- show card label name
- show card count in each column
- show true age for each card (the time that each card has been in the column)

People started to build lots of small extensions to power up their Trello boards. Then one day, I found that half of my Chrome extentions were Trello-related. I started to think about if I could create an all-in-one plugin which could fulfill all my purposes.

## Features

### True age for the Trello card

Trello has a card aging feature, but it does not show the true age of the card in a list. When you add a comment or update the card name, the card will be treated as new.
The feature can tell you how long the card has been in the list. No excuse any more!

### Card number

Display the missing Trello card number.

### Card count for each column

Display the card count at top of the columns.

### Label name

Display the label names and still keep the color of them.

## Screenshots
Same Trello board before and after installing this extension

![Before](/Before.png)
![After](/After.png)

As per requests by a few users, options to disable features excluding aging were added.

![options](/options.png)

## Library used
Huge thanks to [moment.js](https://github.com/moment/moment), dealing with time is so easy with it.

## Development
1. Git Clone this repo
2. Go to extension page. For chrome extensions chrome://extensions
3. Enable developer mode
4. Click on load unpacked extension and select the folder created by Git Clone

PRs are welcome :)

## Know issues and fix:

1. Card age label does not show when switching boards.
2. Card age label disappears when moving cards to another list.

Just refresh the page, it will work as expected.

## Contributors
Author: [@derrickqin](https://github.com/derrickqin)

## Copyright and License
❗️ This extension is not sponsored by, endorsed by, or an official project of GitHub. This is a personal project and is developed solely for providing additional functionalities on GitHub website.

> [MIT license](https://opensource.org/licenses/MIT) (MIT)

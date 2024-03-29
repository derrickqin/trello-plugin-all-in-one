# Trello plugin all-in-one
> Your all-in-one [Trello](https://trello.com/) board plugin

![Chrome Web Store](https://img.shields.io/chrome-web-store/d/pnfioopglhebphfgkagefdmajgibahkk.svg?style=for-the-badge&label=Chrome%20users&ogo=google-chrome&logoColor=white)
![Chrome Web Store](https://img.shields.io/chrome-web-store/v/pnfioopglhebphfgkagefdmajgibahkk.svg?style=for-the-badge&logo=google-chrome&logoColor=white)

## Update after the Trello release around 2023/10/20
There was a release of Trello website on 20 Oct 2023, which removed hidden card number and the total number of each list/column. I had to re-implement these features.
It took me some time because Chrome Web Store no longer accepts Manifest V2 extensions. I had to migrate it to Manifest V3.

## Supported Browser
Get it from Chrome Store! [Trello plugin all-in-one](https://chrome.google.com/webstore/detail/trello-plugin-all-in-one/pnfioopglhebphfgkagefdmajgibahkk?hl=en)

## Background
Trello boards are really useful for lots of purposes. However, there are lots of missing features that users ask for, such as
- card number
- card label name
- total number of cards in each list/column
- true car age (the time that each card has been moved to a column)

People started to build lots of small extensions to power up their Trello boards. Then one day, I found that half of my Chrome extensions were Trello-related. I started to think about if I should create an all-in-one plugin which could fulfill all my purposes.

## Features

### True age for the Trello card

Trello has a card aging feature, but it does not show the true age of the card in a list. When you add a comment or update the card name, the card will be treated as new.
The feature can tell you how long the card has been in the list. No excuse any more!

### Card number

Display the missing Trello card number.

### Card count for each column

Display the total number of cards in each column.

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
❗️ Trello is a product of Atlassian Corporation. This extension is not sponsored by, endorsed by, or an official project of Trello. This is a personal project and is developed solely for providing additional functionalities on Trello website.

> [MIT license](https://opensource.org/licenses/MIT) (MIT)

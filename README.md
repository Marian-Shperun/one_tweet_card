## React component, Card for one tweet

![App Screenshot](https://i.ibb.co/RGKN1mk/result-test-task.png) Result

## Task

Create a card for one tweet and add interactivity when click on button.

## Execution criteria

- The layout is fixed in px, semantic and valid.
- There are no mistakes in the browser console.
- The work is done on a native JS or react.
- The interactivity works in accordance with the technical task.
- The code is formatted and without comments.

## Technical task

1.  According to the
    [layout,](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0-1&t=BlGnt08dqKBSPf1w-0)
    you need to implement the user card.

2.  When click on the follow button - its text changes to following. The color
    of the button also changes. And to the number of followers is added. That
    is, The initial amount is 100,500 followers. When click on the button will
    be 100,501.

3.  When updated pages, the end result of the user's actions should be fixed.
    That is, if you click on the button and update the page - the button still
    remains in the state of following with the appropriate color and the number
    of followers is not decreases to the original value.

4.  When the click is repeated, its text and color change to its original state.
    The number of followers also changes. It decreases by 1 (100,500).

5.  In the code, the figure of 100 500 must be assigned to one value (100500).
    In UI - Diluted through a coma (100 500).

6.  Create a local database (a separate JSON file) with the following Fields:
    ID, User, Tweets, Followers, Avatar

7.  Each card should be independent functionally from each other.

## Tech Stack

React, LocalStorage, styled-components

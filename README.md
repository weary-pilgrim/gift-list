# gift-list

Generate a gift exchange list.

## Installation

1. Clone the repo:

    ```zsh
    git clone https://github.com/weary-pilgrim/gift-list.git
    ```

2. Install the dependencies with [yarn](https://yarnpkg.com/):

    ```zsh
    cd gift-list
    yarn
    ```

## Set up your list:

Create a `.gift-list-rc` file in the `gift-list` directory or in your home directory.

```yaml
limits:
  round1: 50
  round2: 25
participants:
  - John
  - Joe
  - Frank
  - Cindy
  - Juan
  - Dan
  - Bradly
  - Matt
```

# Running the Gift List

Run this command in the `gift-list` directory:

```zsh
yarn start
```

This will result in output like this:

```
We will do two rounds of gifts this year.

Spending limits:
  Round 1: $50
  Round 2: $25

Gift assignments:
  Bradly: Matt, Dan
  Cindy: Juan, Frank
  Dan: John, Juan
  Frank: Cindy, Joe
  Joe: Bradly, Matt
  John: Joe, Cindy
  Juan: Frank, Bradly
  Matt: Dan, John
```
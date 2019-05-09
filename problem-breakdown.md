Problem breakdown
=================

## Current functionality

1. `sell_in`
    - All items have a `sell_in` value which denotes the number of days in which we have to sell the item
    - `sell_in` can go below zero
    - Once below (actually, once it _reaches_) 0 `quality` degrades twice as fast
    - (Learnt that negative degradation (Aged Brie) also doubles when sell_in <= 0) 

    - **Ideas**
      - Rename this to `daysLeftToSell`?
      - (Rules state don't change the `Item` class, so name will have to remain)


2. `quality`
    - All items have a `quality` value which denotes how valuable the item is
    - `quality` cannot go below 0
    - If `sell_in` < 0 `quality` degrades twice as fast
    - `quality` cannot go above 50
    - However, `quality` of "Sulfuras" is 80

    - **Ideas**
      - Rename this to `value`?
      - (Rules state don't change the `Item` class, so name will have to remain)


3. `update_quality()`
    - At the end of each day our system lowers both the `sell_in` and `quality` values for every item
    - Method is called `update_quality` which does this for both
    
    - If `item` === "Aged Brie" `quality` increases each day
    - If `item` === "Sulfuras" `quality` never changes and `sell_in` never changes
    - If `item` === "Backstage passes" `quality` increases each day
      - When `sell_in` === 5 < 10 days `quality` increases by 2
      - When `sell_in` === 0 < 5 days `quality` increases by 3
      - When `sell_in` === 0 or less `quality` = 0

    - **Ideas**
      - Split method to individual responsibilities?
      - Rename each to `reducesDayLeftToSell` and `reduceValue`?

------

### Changes

1. Feel free to make any changes to `update_quality()` and add any new code as long as everything still works correctly.

2. Do not alter the `Item` class or `items` property

------

## New feature

New item "Conjured" requires an update...

- "Conjured" items degrade in `quality` twice as fast as normal items

------

## Refactor steps

Refactor so that adding the new `Conjured` items feature is easy to do

1. Write tests first to ensure current functionality does not break when refactoring
    - Start with feature tests
    - Test behaviour not state
    - (This might highlight areas to refactor by doing this)
    - NOTE: As current `update_quality` method does not return anything, initial tests will test for state more than I would like. Refactor tests along with code to change this

2. Descriptive naming

3. Don't allocate memory in an instance variable for something that can be a constant

4. Look for repetition
    - If method names contain some similar words, look to extract common items

5. Keep methods short
    - Single responsibility - when describing a method, do you use the work 'and'?
    - What is the core functionality, what could be delegated
    - Keep to 7 lines max
    - Any repetition -> could similar code be combined and made into a separate method
    - If 2 things are always called together, create a custom method that includes them both

6. Do all methods return something (rather than just modifying state)
    - Return `this` to allow method chaining?
    - NOTE: current method doesn't return anything, so tests will need to test state to start with. Refactor tests with methods

7. Extract new classes if there are any super classes handling most of the behaviour
    - Each class less than 50 lines?
    - Ensure a class/object doesn't know too much about any other class/object that its interacting with
      - Just want to ask for something and get that value back
      - Don't delve into another object too much (when interacting with another object don't chain that object's methods together)


------

### Possible extra refactoring

8. Test coverage

9. Add linting

10. Update README

------

## Breakdown of feature tests

1. Quality of a specific item reduces as expected

2. Quality of multiple specific items reduce as expected

3. Quality of a standard item degrades twice as fast when sell_in is <= 0

4. Quality can't go below 0

5. Quality of first _unusual_ item (Aged Brie) changes as expected

6. Quality can't go above 50

7. Sulfuras quality doesn't change

8. Tests for quality change of "Backstage passes"
    - Quality increases as normal when sell_in > 10
    - Quality increases by 2 when sell_in === 5 < 10
    - Quality increases by 3 when sell_in === 0 < 5
    - Quality === 0 when sell_in <= 0

------

## Breakdown of first refactor

What is the `update_quality()` method currently doing?

- reduceDaysLeftToSell()
- updateQuality()

- isStandardItem()
- checkQualityAboveZero()
- checkQualityBelowFifty()
- checkSellInDaysForBackstagePasses()


Above are options for separate methods
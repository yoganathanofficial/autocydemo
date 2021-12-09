 Feature: Verifiction of Amazon website

  Product search in Amazon website.

    Scenario: Search Nikon and select 2nd item then verify the product topic contains Nikon D3X
        Given I search the Nikon in amazon website search box
        When I sort the results from highest price to lowest
        And I Select the second product and click for details
        Then Verify the product topic contains Nikon D3X

    Scenario Outline: Add eGift cards with details to Cart
        Given I Select Animated eGift card category in amazon website
        When I select random Animated eGift card
        And I enter random amount from $1 to $100
        And I enter "<To>" and "<From>" and "<Message>" and "<Quantity>" details
        And I select the second available delivery date from the calendar
        And I Add produt to the cart
        Then Verify that Add to cart API request is successfull

        Examples:
          | To                  | From  | Message          | Quantity |
          | yoga.d@gmail.com    | YogaD | Gift from YogaD  | 1 |
          | dyoga@outlook.com   | Dyoga | Dyoga Gift       | 2 |


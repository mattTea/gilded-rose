function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

// What is this method originally doing?
// - reduceDaysLeftToSell()
function reduceDaysToSell(item) {
  item.sell_in -= 1
  return item
}

// - updateQuality()
function updateQuality(item, changeAmount) {
  item.quality += changeAmount
  return item
}

// - isLegendaryItem()
// function isLegendaryItem(item) {
//   if (item.name === "Sulfuras, Hand of Ragnaros") return true
// }

// - isStandardItem()
function isStandardItem(item) {
  var nonStandardItems = [
    "Aged Brie",
    "Sulfuras, Hand of Ragnaros",
    "Backstage passes to a TAFKAL80ETC concert"
  ]
  if (nonStandardItems.includes(item.name)) {
    return false
  } else {
    return true
  }
}

// - checkQualityAboveZero()
// - checkQualityBelowFifty()
// function isInStandardQualityRange(item) {
//   if (item.quality > 0 && item.quality < 50) return true
// }

// - checkSellInDaysForBackstagePasses()
function update_quality() {
  for (var i = 0; i < items.length; i++) {
    // if (!isLegendaryItem(items[i])) {
    //   reduceDaysToSell(items[i])
    // }
    if (isStandardItem(items[i]) && items[i].quality > 0) {
      updateQuality(items[i], -1)
    } else {
      if (items[i].quality < 50) {
        updateQuality(items[i], 1)
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              updateQuality(items[i], 1)
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              updateQuality(items[i], 1)
            }
          }
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      reduceDaysToSell(items[i])
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              updateQuality(items[i], -1)
            }
          }
        } else {
          items[i].quality = 0
        }
      } else {
        if (items[i].quality < 50) {
          updateQuality(items[i], 1)
        }
      }
    }
  }
}

function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []
var NonStandardItems = [
  "Aged Brie",
  "Sulfuras, Hand of Ragnaros",
  "Backstage passes to a TAFKAL80ETC concert"
]
var LegendaryItems = [
  "Sulfuras, Hand of Ragnaros"
]
var BackstagePasses = [
  "Backstage passes to a TAFKAL80ETC concert"
]

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function reduceDaysToSell(item) {
  item.sell_in -= 1
  return item
}

function updateQuality(item, changeAmount) {
  item.quality += changeAmount
  if (item.quality > 50) item.quality = 50
  if (item.quality < 0) item.quality = 0
  return item
}

function isLegendaryItem(item) {
  return LegendaryItems.includes(item.name) ? true : false
}

function isStandardItem(item) {
  return NonStandardItems.includes(item.name) ? false : true
}

function isBackstagePass(item) {
  return BackstagePasses.includes(item.name) ? true : false
}

function updateBackstagePass(item) {
  if (item.sell_in > 10) {
    updateQuality(item, 1)
  } else if (item.sell_in > 5) {
    updateQuality(item, 2)
  } else if (item.sell_in > 0) {
    updateQuality(item, 3)
  } else {
    item.quality = 0
  }
  return item
}

function updateStandardItem(item) {
  item.sell_in > 0 ? updateQuality(item, -1) : updateQuality(item, -2)
  reduceDaysToSell(item)
  return item
}

function updateBrie(item) {
  item.sell_in <= 0 ? updateQuality(item, 2) : updateQuality(item, 1)
  reduceDaysToSell(item)
  return item
}

function updateStock() {
  for (var i = 0; i < items.length; i++) {
    if (isLegendaryItem(items[i])) reduceDaysToSell(items[i])
    if (isStandardItem(items[i])) updateStandardItem(items[i])
    if (isBackstagePass(items[i])) updateBackstagePass(items[i])
    if (items[i].name === "Aged Brie") updateBrie(items[i])
  }
}

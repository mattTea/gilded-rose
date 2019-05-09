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
  var legendaryItems = [
    "Sulfuras, Hand of Ragnaros"
  ]
  if (legendaryItems.includes(item.name)) {
    return true
  } else {
    return false
  }
}

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

function updateBackstagePass(item) {
  if (item.sell_in < 11 && item.quality < 50) {
    updateQuality(item, 1)
  }
  if (item.sell_in < 6 && item.quality < 50) {
    updateQuality(item, 1)
  }
  return item
}

function updateStandardItem(item) {
  if (item.sell_in > 0) {
    updateQuality(item, -1)
  } else {
    updateQuality(item, -2)
  }
  reduceDaysToSell(item)
  return item
}

function updateBrie(item) {
  if (item.sell_in <= 0) {
    updateQuality(item, 2)
  } else {
    updateQuality(item, 1)
  }
  reduceDaysToSell(item)
  return item
}

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    // if (isStandardItem(items[i]) && items[i].quality > 0) {
    //   updateQuality(items[i], -1)
    // } else {
    //   if (items[i].quality < 50) {
    //     updateQuality(items[i], 1) // <- updating Brie here as well as below
    //     if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //       updateBackstagePass(items[i])
    //     }
    //   }
    // }

    if (isLegendaryItem(items[i])) {
      reduceDaysToSell(items[i])
    }
    if (isStandardItem(items[i])) {
      updateStandardItem(items[i])
    }
    if (items[i].name === "Backstage passes to a TAFKAL80ETC concert" && items[i].sell_in <= 0) {
      items[i].quality = 0
    }
    if (items[i].name === "Aged Brie") {
      updateBrie(items[i])
    }
  }
}

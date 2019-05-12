describe("Gilded Rose", function() {

  describe(".reduceDaysToSell", function() {
    it("reduces days to sell by 1", function() {
      var newItem = new Item("Normal item", 5, 5)
      expect(reduceDaysToSell(newItem).sell_in).toEqual(4)
    })
  })
  
  describe(".updateQuality", function() {
    it("increases normal item quality by 1", function() {
      var newItem = new Item("Normal item", 5, 5)
      expect(updateQuality(newItem, 1).quality).toEqual(6)
    })
    
    it("limits high quality to 50", function() {
      var qualityItem = new Item("High quality item", 5, 49)
      expect(updateQuality(qualityItem, 2).quality).toEqual(50)
    })
  
    it("limits low quality to 0", function() {
      var poorItem = new Item("Low quality item", 5, 1)
      expect(updateQuality(poorItem, -2).quality).toEqual(0)
    })
  })
  
  it(".isLegendaryItem()", function() {
    var legendaryItem = new Item("Sulfuras, Hand of Ragnaros", 0, 80)
    expect(isLegendaryItem(legendaryItem)).toBe(true)
  })
  
  it(".isStandardItem()", function() {
    var standardItem = new Item("Normal item", 5, 5)
    expect(isStandardItem(standardItem)).toBe(true)
  })

  describe("Backstage Pass", function() {
    it(".isBackStagePass()", function() {
      var backstageItem = new Item(
        "Backstage passes to a TAFKAL80ETC concert",
        5, 5
      )
      expect(isBackstagePass(backstageItem)).toBe(true)
    })

    it("increases quality by 1 if sell_in > 10", function() {
      var backstageItem = new Item(
        "Backstage passes to a TAFKAL80ETC concert",
        11, 5
      )
      expect(updateBackstagePass(backstageItem).quality).toEqual(6)
    })

    it("increases quality by 2 if sell_in 5>10", function() {
      var backstageItem = new Item(
        "Backstage passes to a TAFKAL80ETC concert",
        6, 5
      )
      expect(updateBackstagePass(backstageItem).quality).toEqual(7)
    })

    it("increases quality by 3 if sell_in 0>5", function() {
      var backstageItem = new Item(
        "Backstage passes to a TAFKAL80ETC concert",
        1, 5
      )
      expect(updateBackstagePass(backstageItem).quality).toEqual(8)
    })

    it("sets quality to 0 if sell_in == 0", function() {
      var backstageItem = new Item(
        "Backstage passes to a TAFKAL80ETC concert",
        0, 5
      )
      expect(updateBackstagePass(backstageItem).quality).toEqual(0)
    })
  })

  describe(".updateStandardItem", function() {
    it("reduces quality by 1 when item.sell_in > 0", function() {
      var newItem = new Item("Normal item", 5, 5)
      expect(updateStandardItem(newItem).quality).toEqual(4)
    })

    it("reduces quality by 2 when item.sell_in <= 0", function() {
      var newItem = new Item("Normal item", -2, 5)
      expect(updateStandardItem(newItem).quality).toEqual(3)
    })
  })
  
  describe(".updateBrie", function() {
    it("increases quality by 1 if brie sell_in > 0", function() {
      var brie = new Item("Aged Brie", 2, 5)
      expect(updateBrie(brie).quality).toEqual(6)
    })

    it("increases quality by 2 if brie sell_in <= 0", function() {
      var brie = new Item("Aged Brie", -1, 5)
      expect(updateBrie(brie).quality).toEqual(7)
    })
  })

  // it("updates stock details for all items", function() {
  //   var items = [
  //     { name: "Sulfuras, Hand of Ragnaros", sell_in: 0, quality: 80 },
  //     { name: "Backstage passes to a TAFKAL80ETC concert", sell_in: 15, quality: 20 },
  //     { name: "Aged Brie", sell_in: 2, quality: 0 },
  //     { name: "Elixir of the Mongoose", sell_in: 5, quality: 7 }
  //   ]
  //   expect(updateStock()).toEqual(jasmine.arrayContaining(
  //     // [
  //       { name: "Sulfuras, Hand of Ragnaros", sell_in: -1, quality: 80 },
  //       { name: "Backstage passes to a TAFKAL80ETC concert", sell_in: 14, quality: 21 },
  //       { name: "Aged Brie", sell_in: 1, quality: 1 },
  //       { name: "Elixir of the Mongoose", sell_in: 4, quality: 6 }
  //     // ]
  //   ))
  // })
})

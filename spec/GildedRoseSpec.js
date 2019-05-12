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
  })
  

  
})
describe("Feature", function() {
  it("updates quality of standard item", function() {
    var item = new Item("Novelty Mug", 5, 10)
    items.push(item)
    updateStock()
    expect(JSON.stringify(item)).toEqual(JSON.stringify({name: "Novelty Mug", sell_in: 4, quality: 9}))
  })

  it("updates quality of multiple standard items", function() {
    var item1 = new Item("Novelty Mug", 5, 10)
    var item2 = new Item("Fake moustache", 12, 18)
    items.push(item1)
    items.push(item2)
    updateStock()
    expect(JSON.stringify(item1)).toEqual(JSON.stringify({name: "Novelty Mug", sell_in: 4, quality: 9}))
    expect(JSON.stringify(item2)).toEqual(JSON.stringify({name: "Fake moustache", sell_in: 11, quality: 17}))
  })

  it("reduces quality of a standard item twice as much when sell_in <= 0", function() {
    var item = new Item("Novelty Mug", 1, 10)
    items.push(item)
    updateStock()
    updateStock()
    updateStock()
    expect(item.quality).toEqual(5)
  })

  it("limits minimum quality to 0", function() {
    var item = new Item("Clown shoes", 5, 1)
    items.push(item)
    updateStock()
    updateStock()
    updateStock()
    expect(item.quality).toEqual(0)
  })

  it("increases quality of 'Aged Brie' as 'sell_in' reduces", function() {
    var item = new Item("Aged Brie", 2, 0)
    items.push(item)
    updateStock()
    expect(item.quality).toEqual(1)
  })

  it("increases quality of 'Aged Brie' twice as much when 'sell_in' is below 0", function() {
    var item = new Item("Aged Brie", 1, 0)
    items.push(item)
    updateStock()
    updateStock()
    updateStock()
    expect(item.quality).toEqual(5)
  })

  it("limits maximum quality to 50", function() {
    var item = new Item("Aged Brie", -12, 49)
    items.push(item)
    updateStock()
    updateStock()
    updateStock()
    expect(item.quality).toEqual(50)
  })

  it("does not change quality for Sulfuras", function() {
    var item = new Item("Sulfuras, Hand of Ragnaros", 0, 80)
    items.push(item)
    updateStock()
    updateStock()
    expect(item.quality).toEqual(80)
  })

  it("increases quality of 'Backstage passes' normally when sell_in >= 10", function() {
    var item = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)
    items.push(item)
    updateStock()
    expect(item.quality).toEqual(21)
  })

  it("increases quality of 'Backstage passes' by 2 when sell_in is 10 (6-10)", function() {
    var item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)
    items.push(item)
    updateStock()
    expect(item.quality).toEqual(22)
  })

  it("increases quality of 'Backstage passes' by 2 when sell_in is 6 (6-10)", function() {
    var item = new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20)
    items.push(item)
    updateStock()
    expect(item.quality).toEqual(22)
  })

  it("increases quality of 'Backstage passes' by 3 when sell_in is 5 (1-5)", function() {
    var item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)
    items.push(item)
    updateStock()
    expect(item.quality).toEqual(23)
  })

  it("increases quality of 'Backstage passes' by 3 when sell_in is 1 (1-5)", function() {
    var item = new Item("Backstage passes to a TAFKAL80ETC concert", 1, 20)
    items.push(item)
    updateStock()
    expect(item.quality).toEqual(23)
  })

  it("sets quality to 0 for 'Backstage passes' when sell_in 0 (<=0)", function() {
    var item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)
    items.push(item)
    updateStock()
    expect(item.quality).toEqual(0)
  })

  it("sets quality to 0 for 'Backstage passes' when sell_in -1 (<=0)", function() {
    var item = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 20)
    items.push(item)
    updateStock()
    expect(item.quality).toEqual(0)
  })
})
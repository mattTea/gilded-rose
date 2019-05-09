describe("Feature", function() {
  it("updates quality of standard item", function() {
    var item = new Item("Novelty Mug", 5, 10)
    items.push(item)
    update_quality()
    expect(JSON.stringify(item)).toEqual(JSON.stringify({name: "Novelty Mug", sell_in: 4, quality: 9}))
  })

  it("updates quality of multiple standard items", function() {
    var item1 = new Item("Novelty Mug", 5, 10)
    var item2 = new Item("Fake moustache", 12, 18)
    items.push(item1)
    items.push(item2)
    update_quality()
    expect(JSON.stringify(item1)).toEqual(JSON.stringify({name: "Novelty Mug", sell_in: 4, quality: 9}))
    expect(JSON.stringify(item2)).toEqual(JSON.stringify({name: "Fake moustache", sell_in: 11, quality: 17}))
  })

  it("reduces quality of a standard item twice as much when sell_in <= 0", function() {
    var item = new Item("Novelty Mug", 1, 10)
    items.push(item)
    update_quality()
    update_quality()
    update_quality()
    expect(item.quality).toEqual(5)
  })

  it("limits minimum quality to 0", function() {
    var item = new Item("Clown shoes", 5, 1)
    items.push(item)
    update_quality()
    update_quality()
    update_quality()
    expect(item.quality).toEqual(0)
  })

  it("increases quality of 'Aged Brie' as 'sell_in' reduces", function() {
    var item = new Item("Aged Brie", 2, 0)
    items.push(item)
    update_quality()
    expect(item.quality).toEqual(1)
  })

  it("increases quality of 'Aged Brie' twice as much when 'sell_in' is below 0", function() {
    var item = new Item("Aged Brie", 1, 0)
    items.push(item)
    update_quality()
    update_quality()
    update_quality()
    expect(item.quality).toEqual(5)
  })

  it("limits maximum quality to 50", function() {
    var item = new Item("Aged Brie", -12, 49)
    items.push(item)
    update_quality()
    update_quality()
    update_quality()
    expect(item.quality).toEqual(50)
  })

  it("does not change quality for Sulfuras", function() {
    var item = new Item("Sulfuras, Hand of Ragnaros", 0, 80)
    items.push(item)
    update_quality()
    update_quality()
    expect(item.quality).toEqual(80)
  })
})
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
})
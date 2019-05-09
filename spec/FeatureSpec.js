describe("Feature", function() {
  it("updates quality of item", function() {
    var item = new Item("Novelty Mug", 5, 10)
    items.push(item)
    update_quality()
    expect(JSON.stringify(item)).toEqual(JSON.stringify({name: "Novelty Mug", sell_in: 4, quality: 9}))
  })
})
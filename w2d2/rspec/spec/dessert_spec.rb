require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("andrew") }
  subject(:cookie) {Dessert.new("cookie", 100, chef)}

  describe "#initialize" do
    it "sets a type" do
      expect(cookie.type).to eq("cookie")
    end

    it "sets a quantity" do
      expect(cookie.quantity).to eq(100)
    end

    it "starts ingredients as an empty array" do
      expect(cookie.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect{Dessert.new("cookie", "I want to eat cookies", :chef)}.to raise_error
    end
  end

  context "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      cookie.add_ingredient("chocolate chips")
      expect(cookie.ingredients).to eq(["chocolate chips"])
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      ingredients = ["chocolate chips", "flour", "sugar", "salt", "baking soda", "vanilla extract"]
      ingredients.each do |ingredient|
        cookie.add_ingredient(ingredient)
      end

      cookie.mix!
      expect(cookie.ingredients).not_to eq(ingredients)
      expect(cookie.ingredients.sort).to eq(ingredients.sort)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      cookie.eat(100)
      expect(cookie.quantity).to eq(0)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect{cookie.eat(200)}.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Andrew the Great Baker")
      expect(cookie.serve).to include("the Great Baker")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      allow(chef).to receive(:bake).with(cookie)
      expect(chef).to receive(:bake).with(cookie)
      cookie.make_more
    end
  end
end

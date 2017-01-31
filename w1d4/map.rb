class Map
  attr_accessor :map

  def initialize
    @map = Array.new()
  end

  def assign(key, value)
    map << [key, value]
  end

  def lookup(key)
    map.each_with_index do |key_value|
      return key_value[1] if key_value[0] == key
    end

  end

  def remove(key)
    map.select!{|key_value| key_value[0] != key}
  end

  def show
    p map
  end

end

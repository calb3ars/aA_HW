fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def sluggish_octopus(fishes)
  longest_fish = fishes[0]
  longest_length = longest_fish.length

  fishes.each_with_index do |fish, i|
    ((i + 1)...fishes.length).each do |j|
      if fishes[j].length > fish.length
        longest_fish = fishes[j]
        longest_length = fishes[j].length
      end
    end
  end

  longest_fish
end

p sluggish_octopus(fishes)

def dominant_octopus(fishes)
  merge_sort(fishes){ |a,b| a.length <=> b.length }.last
end

def merge_sort(fishes, &prc)
  return fishes if fishes.length < 2
  prc ||= proc {|a,b| a <=> b}
  mid = fishes.length / 2
  left = merge_sort(fishes[0...mid], &prc)
  right = merge_sort(fishes[mid..-1],&prc)

  merge(left, right, &prc)
end

def merge(left, right, &prc)
  sorted = []
  until left.empty? || right.empty?
    sorted << (prc.call(left.first, right.first) == -1 ? left.shift : right.shift )
  end
    sorted + left + right
end

p dominant_octopus(fishes)

def clever_octopus(fishes)
  longest_fish = fishes[0]
  longest_length = longest_fish.length

  fishes.each do |fish|
    if fish.length >= longest_length
      longest_fish = fish
      longest_length = fish.length
    end
  end

  longest_fish
end

p clever_octopus(fishes)

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(move, tiles_array)
  tiles_array.each_with_index do |direction, i|
    return i if move == direction
  end
end

p slow_dance("up", tiles_array)
p slow_dance("right-down", tiles_array)

def tiles_hashify(tiles_array)
  tiles_hash = {}
  tiles_array.each_with_index do |move, i|
    tiles_hash[move] = i
  end

  tiles_hash
end

tiles_hash = tiles_hashify(tiles_array)

def fast_dance(move, tiles_hash)
  tiles_hash[move]
end

p fast_dance("up", tiles_hash)

p fast_dance("right-down", tiles_hash)

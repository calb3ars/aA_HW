require 'byebug'
class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14){ Array.new }
    place_stones
  end

  def place_stones
    @cups.each_with_index do |cup, i|
      # debugger
      unless i == 6 || i == 13
        4.times do
          cup << :stone
        end
      end
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos < 0 || start_pos > 12
    raise "Invalid starting cup" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos]
    @cups[start_pos] = []

    cup_counter = start_pos
    until stones.empty?
      cup_counter += 1
      cup_counter = 0 if cup_counter > 13

      #place stones in  correct current player's cups
      if cup_counter == 6
        @cups[6] << stones.pop if current_player_name == @name1
      elsif cup_counter == 13
        @cups[13] << stones.pop if current_player_name == @name2
      else
        @cups[cup_counter] << stones.pop
      end
    end

    render
    next_turn(cup_counter)
  end

  def next_turn(ending_cup_idx)
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].count == 1
      :switch
    else
      ending_cup_idx
    end
    # helper method to determine what #make_move returns
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..5].all?{|cup| cup.empty?} ||
    @cups[7..12].all?{|cup| cup.empty?}
  end

  def winner
    player1_stones = @cups[6].count
    player2_stones = @cups[13].count
    if player1_stones == player2_stones
      :draw
    else
      player1_stones > player2_stones ? @name1 : @name2
    end
  end
end

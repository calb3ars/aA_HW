class Simon

  COLORS = %w(red blue yellow green)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
      system("clear")
    end

    game_over_message
    reset_game
  end

  def add_random_color
    seq << COLORS.sample
  end

  def take_turn
    show_sequence
    require_sequence

    unless @game_over
      round_success_message
      @sequence_length += 1
      sequence_length += 1
    end
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def round_success_message
    "Great job! Here's the next sequence:"
  end

  def game_over?
    if game_over
      game_over_message
      Simon.new
    end
  end

  def game_over_message
    puts "Game Over. You made it #{@sequence_length - 1} rounds.
    \nPlay again!"
  end

  def show_sequence

    @seq.dup
    add_random_color

    add_random_color
    @seq.each do |color|
      puts color
      sleep 0.75
      system("clear")
      sleep 0.25
    end

  end

  def require_sequence
    puts "Repeat the sequence by entering the first letter of each color on a new line."
    @seq.each do |color|
      user_color = gets.chomp
      if color != user_color
        @game_over = true
        break
      end
    end
    sleep 0.25
  end

end

class Stack
  attr_accessor :stack

  def initialize
    @stack = Array.new
  end

  def add(el)
    stack.push(el)
  end

  def remove
    stack.pop
  end

  def show
    stack.dup
  end
end

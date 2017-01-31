class Queue
  attr_accessor :queue

  def initialize
    @queue = Array.new
  end

  def enqueue(el)
    queue.push(el)
  end

  def dequeue
    queue.shift
  end

  def show
    p queue
  end
end

class GreetingsController < ApplicationController
  def api
    random_greeting = Greeting.order('RANDOM()').first
    render json: { message: random_greeting&.message || 'No greetings found' }
  end
end

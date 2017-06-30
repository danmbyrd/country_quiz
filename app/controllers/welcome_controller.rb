class WelcomeController < ApplicationController
  def index
    @question = Question.find_by(id: 1)
  end
end

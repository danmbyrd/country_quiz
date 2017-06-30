class Question < ApplicationRecord
   has_many :answers

   def add_default_answers
     self.answers = (1..5).map do |x| 
       Answer.new(order: x, text: x)
     end
   end

end

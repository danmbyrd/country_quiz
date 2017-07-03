class Api::V1::CountryMatchesController < Api::V1::BaseController

  def index
    logger.info("Request sent is: #{params.inspect}")
    all_countries = Country.all.includes({ answers: [:question]})

    match_rate_per_country = all_countries.map do |country|

      wanted_vector = Hash[country.answers.map do |answer|
        question = answer.question
        [question.id, answer.order]
      end]
      logger.info("Wanted vector is #{wanted_vector}")

      user_vector = wanted_vector.keys.map do |question_id|
        question_id = question_id.to_s
        if params.key?(question_id)
          [question_id.to_i, params[question_id].to_i]
        else
          nil
        end
      end
      user_vector = Hash[user_vector.reject{ |i| i.nil? }]
      user_vector
      logger.info("User vector is #{user_vector}")

      diff_sq = user_vector.map do |q_id, a_id|
        (a_id - wanted_vector[q_id]) ** 2
      end
    
      maximal_distance = Math.sqrt(16 * user_vector.size)
      user_distance = Math.sqrt(diff_sq.inject(0){ |sum, x| sum + x }) 
      score = 1.0 - (user_distance / maximal_distance)
      { score: score, country: country}
        
    end
        
  logger.info("match_rate_per_country is #{match_rate_per_country}")
  sorted_match_rate = match_rate_per_country.sort { |x, y| y[:score] <=> x[:score] }
  respond_with sorted_match_rate 
  end

end

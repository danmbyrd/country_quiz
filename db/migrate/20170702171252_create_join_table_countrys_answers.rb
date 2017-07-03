class CreateJoinTableCountrysAnswers < ActiveRecord::Migration[5.1]
  def change
    create_join_table :countries, :answers do |t|
      # t.index [:country_id, :answer_id]
      # t.index [:answer_id, :country_id]
    end
  end
end

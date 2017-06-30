class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.string :text
      t.integer :order

      t.timestamps
    end
  end
end

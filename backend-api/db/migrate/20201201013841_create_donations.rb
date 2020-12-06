class CreateDonations < ActiveRecord::Migration[6.0]
  def change
    create_table :donations do |t|
      t.string :donor_name
      t.string :donor_email
      t.string :donor_amount
      t.references :charity, foreign_key: true

      t.timestamps
    end
  end
end

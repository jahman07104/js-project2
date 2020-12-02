class CreateDonations < ActiveRecord::Migration[6.0]
  def change
    create_table :donations do |t|
      t.string :donor_name
      t.string :donor_email
      t.string :donor_amount

      t.timestamps
    end
  end
end

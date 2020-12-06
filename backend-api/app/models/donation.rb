class Donation < ApplicationRecord
  belongs_to :charity, optional: true
end

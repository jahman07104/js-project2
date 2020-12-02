class DonationsController < ApplicationController

  def index
    @donations = Donations.all
    render json: @donations, status: 200
  end
end

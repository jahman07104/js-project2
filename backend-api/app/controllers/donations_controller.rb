class DonationsController < ApplicationController

  def index
    @donations = Donations.all
    render json: @donations, status: 200
  end

  def show 
    @donation = Donation.find(params[:id])

    render json: @donation, status: 200
  end
end

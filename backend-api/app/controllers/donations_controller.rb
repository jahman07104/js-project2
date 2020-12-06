class DonationsController < ApplicationController

  def index
    @donations = Donations.all
    render json: @donations, status: 200
  end

  def create
    @donation = Donation.create!(donation_params)

    render json: @donation, status: 200
  end

  def show 
    @donation = Donation.find(params[:id])

    render json: @donation, status: 200
  end

  private
    def donation_params
      params.require(:donation).permit(:donor_name, :donor_email, :donor_amount)
    end
end

class CharitiesController < ApplicationController

  def index
    @charities = Charity.all
    render json: @charities, status: 200
  end

  def show 
    @charity = Charity.find(params[:id])

    render json: @charity, status: 200
  end

  def create
    @charity = Charity.create(note_params)

    render json:@charity, status: 200
  end

  private
  def charity_params
    params.requite(:charity).permit(:name,:image)
  end
end

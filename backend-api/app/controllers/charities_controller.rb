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
    @charity = Charity.create(charity_params)

    render json:@charity, status: 200
  end

  def update
    @charity = Charity.find(params[:id])
    @charity.update(charity_params)

    render json:@charity, status: 200
  end

  def destroy
    @charity = Charity.find(params[:id])
    @charity.delete

    render json: {charityId: @charity.id}
  end

  private
  def charity_params
    params.requite(:charity).permit(:name,:image)
  end
end

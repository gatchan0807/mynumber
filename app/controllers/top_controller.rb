class TopController < ApplicationController

  def index

  end

  def new
    @user = User.new
  end

  def create
    User.create(create_params)
    redirect_to action: index
  end

  def end
  end

private
  def create_params
    params.require(:user).permit(:name, :number)
  end

end

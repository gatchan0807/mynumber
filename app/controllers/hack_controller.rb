class HackController < ApplicationController
  def step9
    @user = get_user
  end

  def step10
    @user = get_user
  end

  def step11
    @user = get_user
  end

  def step12
    @user = get_user
  end

  private
  def get_user
    User.last
  end
end

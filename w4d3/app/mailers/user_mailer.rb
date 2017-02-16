class UserMailer < ApplicationMailer::Base
  default from: 'noah@hellonomad.com'

  def welcome_email(user)
    @user = user
    @url = 'http://google.com'
    mail(to: user.email, subject: 'Welcome to Awesomeness')
    attachments['Gage_Red.jpg'] = File.read('/Gage_Red.jpg')
  end
end

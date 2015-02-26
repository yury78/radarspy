ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
  :address => 'smtp.sendgrid.net',
  :port    => '587',
  :authentification => :plain,
  :user_name        => 'app33464701@heroku.com',
  :password         => 'ifien64k',
  :domain           => 'heroku.com',
  :enable_starttls_auto  => true  
}
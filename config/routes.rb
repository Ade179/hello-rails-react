Rails.application.routes.draw do
  root 'home#index'
  namespace :api do
    resources :messages, only: [:index]
  end
end

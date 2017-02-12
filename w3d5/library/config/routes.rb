Rails.application.routes.draw do
  resources :books, only: [:new, :create, :index, :destroy]

  # get 'books', to: 'books#index'
  # delete 'books', to: 'books#destroy'
  # patch 'books', to: 'books#create'
end

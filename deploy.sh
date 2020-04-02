docker build -t ParisiPizza-image .

docker tag ParisiPizza-image registry.heroku.com/ParisiPizza/web


docker push registry.heroku.com/ParisiPizza/web

heroku container:release web -a ParisiPizza
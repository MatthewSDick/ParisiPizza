docker build -t parisipizza-image .

docker tag ParisiPizza-image registry.heroku.com/parisipizza/web


docker push registry.heroku.com/parisipizza/web

heroku container:release web -a parisipizzaheroku
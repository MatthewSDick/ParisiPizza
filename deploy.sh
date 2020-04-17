docker build -t parisipizza-image .

docker tag parisipizza-image registry.heroku.com/parisipizza/web

docker push registry.heroku.com/parisipizza/web

heroku container:release web -a parisipizza
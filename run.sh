sudo docker run -d \
	--name banco-postgres \
    -p 5432:5432 \
    -d \
	-e POSTGRES_PASSWORD=suasenha \
	postgres
 
# sudo docker exec -it banco-postgres \
#     psql \
#     -h localhost \
#     -p 5432 \
#     -U postgres \
#     -W

cd..

sudo docker build -t app ng-tech-challenge

cd/ng-tech-challenge

sudo docker run \
	--name app \
	--link banco-postgres \
	-e PORT=4000 \
	-p 4000:4000 \
	app
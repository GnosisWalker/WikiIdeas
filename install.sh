#MONGO_INITDB_ROOT_USERNAME=
#MONGO_INITDB_ROOT_PASSWORD=
#MONGO_INITDB_DATABASE=my_database
#NODE_ENV=development

configs="MONGO_INITDB_DATABASE=wikideas\nNODE_ENV=development"

echo "Input MongoDB root username:"
read mongodb_root_username

echo "Input MongoDB root password:"
read mongodb_root_password

echo -e "MONGO_INITDB_ROOT_USERNAME=$mongodb_root_username\nMONGO_INITDB_ROOT_PASSWORD=$mongodb_root_password\n$configs" > .env.dev
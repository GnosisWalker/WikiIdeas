configs="MONGO_INITDB_DATABASE=wikideas\nNODE_ENV=development"

echo "Input MongoDB root username (defaults to root):"
read mongodb_root_username
if [ -z "$mongodb_root_username" ]; then
  mongodb_root_username="wikideas"
fi

echo "Input MongoDB root password (defaults to root):"
read mongodb_root_password
if [ -z "$mongodb_root_password" ]; then
  mongodb_root_password="wikideas"
fi

echo "Input wikideas user (defaults to wikideas):"
read mongodb_username;
if [ -z "$mongodb_username" ]; then
  mongodb_username="wikideas"
fi

echo "Input wikideas password (defaults to wikideas):"
read mongodb_password;
if [ -z "$mongodb_password" ]; then
  mongodb_password="wikideas"
fi


echo -e "MONGO_INITDB_ROOT_USERNAME=$mongodb_root_username\nMONGO_INITDB_ROOT_PASSWORD=$mongodb_root_password\MONGO_USERNAME=$mongodb_username\nMONGO_PASSWORD=$mongodb_password\n$configs" > .env.dev
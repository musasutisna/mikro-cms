db = db.getSiblingDB('mikro-cms')

db.createUser({
  user: 'mikrocms',
  pwd: 'mikrocms',
  roles: [
    {
      role: 'readWrite',
      db: 'mikro-cms',
    },
  ],
})

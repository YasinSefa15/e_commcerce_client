const api_helper = {
    'api_url': 'http://127.0.0.1:8000/api/',
    'auth': {
        'login': "auth/login",
        'register': "auth/register",
    },
    'category': {
        'read': "categories",
        'list': "categories/list",
        'view': "categories/", // + slug
        'create': "categories",
        'update': "categories/:id",
        'delete': "categories/:id"
    },
    'product': {
        'read': "products",
        'view': "products/", // + slug
        'create': "products",
        'update': "products",
        'delete': "products/"
    },
    'carts' : {
        'view': "carts",
        'create': "carts",
        'update': "carts/:product_id",
        'delete': "carts/:product_id"
    }
}

exports.api_helper = api_helper
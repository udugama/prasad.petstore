export const context: any = {
    request: {
      method: 'POST',
      url: '/petcreate',
      header: {
        'content-type': 'application/json',
        'user-agent': 'PostmanRuntime/7.17.1',
        accept: '*/*',
        'cache-control': 'no-cache',
        'postman-token': '3fabd05d-ccdb-4c98-874f-0100148eae80',
        host: 'localhost:3000',
        'accept-encoding': 'gzip, deflate',
        'content-length': '290',
        connection: 'keep-alive'
      }
    },
    response: {
      status: 404,
      message: 'Not Found',
      header: {}
    },
    app: {
      subdomainOffset: 2,
      proxy: false,
      env: 'development'
    },
    originalUrl: '/petcreate',
    req: '<original node req>',
    res: '<original node res>',
    socket: '<original node socket>'
  };

export const fullContext: any = (() => {
    context.request.body = {
        method: 'POST',
        url: '/petcreate',
        header: {
          'content-type': 'application/json',
          'user-agent': 'PostmanRuntime/7.17.1',
          accept: '*/*',
          'cache-control': 'no-cache',
          'postman-token': '5eeca60e-2a99-440c-ae28-bf6a001aa87e',
          host: 'localhost:3000',
          'accept-encoding': 'gzip, deflate',
          'content-length': '290',
          connection: 'keep-alive'
        }
    };
    
    return context;
})

export const body: any = {
  id: 1,
  category: {
    id: 11,
    name: 'category1'
  },
  name: 'doggie',
  photoUrls: [
    'http://testurl.com/test/pic1'
  ],
  tags: [
    {
      id: 2,
      name: 'tagone'
    }
  ],
  status: 'available'
};

export const savePetResponse: any = {
  photoUrls: [ 'http://testurl.com/test/pic1' ],
  _id: '5d935e212ed59007872bfef3',
  id: 1,
  category: { id: 11, name: 'category1' },
  name: 'doggie',
  tags: [ { _id: '5d935e212ed59007872bfef4', id: 2, name: 'tagone' } ],
  status: 'available',
  __v: 0 
};

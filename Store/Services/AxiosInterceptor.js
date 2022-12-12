import axios from "axios"; 


const postURL = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    responseType: 'json',
    headers:{
        'accept': 'application/json',
        'content-type': 'application/json',
    }
    

})

//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
//postURL.defaults.headers['Authorization'] = 'Fake Token'

postURL.interceptors.request.use(
    (req)=>{
        if(req.url.includes('posts')) {
          req.headers['Authorization'] = 'Fake Token';
        } 
        console.log('request ');
        return req;
    },
    (error)=>{
        console.log(error);
        return Promise.reject(error);
    })

postURL.interceptors.response.use(
    (res)=>{
        console.log('response');
        return res;
    },
    (error)=>{
        
        return Promise.reject(error);
    }
)


export default postURL;


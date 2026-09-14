export default function GetRequestHeaders(){
  const token = localStorage.getItem('token');
  if(!token){
    return { headers: {
      'Content-Type': 'application/json',
    }};
  }
  else{
    return { headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '',
    }};
  }
}
